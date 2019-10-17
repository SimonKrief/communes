package communes;

import java.util.logging.Logger;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;



import communes.entities.Commune;
import communes.CommuneServices;
import communes.servlets.Constantes;

/**
 * Application Lifecycle Listener implementation class ApplicationListener
 *
 */
@WebListener
public class ApplicationListener implements ServletContextListener {
	private static final Logger LOG =Logger.getLogger("communes");

    public ApplicationListener() {
        // TODO Auto-generated constructor stub
    }
    
    @Override
    public void contextDestroyed(ServletContextEvent sce) {
    	EntityManagerFactory emf = (EntityManagerFactory) sce.getServletContext().getAttribute(Constantes.EMF);
    	emf.close();
    	LOG.info(">>> EMF fermé");
    	LOG.info(">>> Application détruite");

    }
    @Override
    public void contextInitialized(ServletContextEvent sce)  { 
    	LOG.info(">>> applisation demarée");
    	EntityManagerFactory emf = Persistence.createEntityManagerFactory("communes");
    	LOG.info(">>> EMF" +emf);
    	ServletContext  application = sce.getServletContext();
    	application.setAttribute(Constantes.EMF, emf);
    	CommuneServices service = new CommuneServices(emf);
    	LOG.info(">>> service"+service);
    	application.setAttribute(Constantes.COMMUNE_SERVICE, service);

    	
    }
	
}
