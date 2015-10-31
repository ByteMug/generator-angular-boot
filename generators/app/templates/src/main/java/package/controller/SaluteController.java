package<%=props.package%>.<%=props.artifact%>.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.stereotype.Controller;
import<%=props.package%>.<%=props.artifact%>.model.Salute;

@Controller
public class SaluteController {

  protected Logger log = LoggerFactory.getLogger(this.getClass());
  private long counter;

  @RequestMapping("/salute")
  public Salute salute(@RequestParam(value = "name", defaultValue = "Adrian") String name) {
    log.info("I just said hello to " + name);
    return new Salute(coutner++, "Salute, " + name + ". To sum up, I saluted " + counter + " times!");
  }
}
