package practice.tuto.springboot.personne;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")

@RestController
public class PersonneController {
	
	@Autowired
	PersonneService personneservice;
	
	@RequestMapping(method=RequestMethod.PUT, value="/personne/{id}")
	public void updatePersonne(@RequestBody Personne personne,@PathVariable Long id) {
		
		personneservice.updatePersonne(personne, id);
	}
	
	@RequestMapping("/personne")
	public List<Personne> getAllPersonne(){
		//List<Personne> person= personneservice.getAllPersonne();
	
		return personneservice.getAllPersonne();
	}
	
	@RequestMapping("/personne/{id}")
	public Optional<Personne> getOnePersonne(@PathVariable Long id) {
		
		return personneservice.getOnePersonne(id);
	}
	
	/*@RequestMapping(method=RequestMethod.DELETE,value="/personne/{id}")
	public void deletPersonne(@PathVariable Long id) {
	
		personneservice.deletePersonne(id);
	}*/
	
	
	@RequestMapping(method=RequestMethod.POST, value="/personne")
	public void loadPersonne(@RequestBody Personne personne) {
		personneservice.createPersonne(personne);
	}
	
	@DeleteMapping("/personne/{id}")
	public ResponseEntity<String> delete(@PathVariable("id") Long id) {
		personneservice.deletePersonne(id);;
		return new ResponseEntity<String>("this personne has been deleted successfully!", HttpStatus.OK);
	}
}
