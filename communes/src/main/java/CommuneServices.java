import java.util.List;

import javax.persistence.EntityManagerFactory;

import communes.dao.CommuneDAO;
import communes.entities.Commune;

public class CommuneServices {
	private CommuneDAO dao;

	public CommuneServices(EntityManagerFactory emf) {
		dao= new CommuneDAO(emf);
	}
	
	public List<Commune> getCommunesByCodePostal(String codePostal){
		return dao.getCommunesByCodePostal(codePostal);
	}

}
