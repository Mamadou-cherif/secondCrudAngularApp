package practice.tuto.springboot.personne;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonneService {

  @Autowired
   PersonneRepository personnerepository;
	
  public List<Personne> getAllPersonne(){
	  
	  return personnerepository.findAll();
  }
	
  public Optional<Personne> getOnePersonne(Long id) {
	  
	  return personnerepository.findById(id); 
	  }

  
  public void updatePersonne(Personne p, Long id) {
	  
	  personnerepository.save(p);
	  }
  
  public void deletePersonne(Long id) {
	  
	  personnerepository.deleteById(id);
  }

  public void createPersonne(Personne p) {
	  personnerepository.save(p);
  }
}
