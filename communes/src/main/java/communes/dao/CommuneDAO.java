package communes.dao;
import communes.entities.Departement;
import communes.entities.Commune;


import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

//import org.antislashn.communes.entities.Commune;
//import org.antislashn.communes.entities.Departement;

public class CommuneDAO extends AbstractDAO<Commune, Long>{

	public CommuneDAO(EntityManagerFactory emf) {
		super(emf, Commune.class);
	}
	
	public List<Commune> getCommunesByCodePostal(String codePostal){
		return getCommunes("Commune.byCodePostal", "codePostal",codePostal+"%".toUpperCase());
	}
	
	public List<Commune> getCommunesByDepartement(String departement){
		return getCommunes("Commune.byDepartement", "nom", departement.toUpperCase());
	}
	
	public List<Commune> getCommunesByRegion(String region){
		return getCommunes("Commune.byRegion","nom", region.toUpperCase());
	}
	
	public List<String> getAllRegions(){
		return getListString("Region.all");
	}
	
	public List<String> getAllDepartements(){
		return getListString("Departement.all");
	}
	
	public List<Departement> getAllDepartementsObjects(){
		EntityManager em = getEntityManagerFactory().createEntityManager();
		List<Departement> liste = em.createNamedQuery("Departement.allObjects",Departement.class).getResultList();
		em.close();
		return liste;
	}
	
	
	private List<String> getListString(String namedQuery) {
		EntityManager em = getEntityManagerFactory().createEntityManager();
		List<String> liste = em.createNamedQuery(namedQuery,String.class).getResultList();
		em.close();
		return liste;
	}

	private List<Commune> getCommunes(String namedQuery,String paramName, String paramValue){
		EntityManager em = getEntityManagerFactory().createEntityManager();
		List<Commune> communes = em.createNamedQuery(namedQuery,Commune.class)
									.setParameter(paramName, paramValue)
									.getResultList();
		em.close();
		return communes;
	}
}