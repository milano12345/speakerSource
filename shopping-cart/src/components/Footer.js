import React from "react";
import ContactForm from "../components/ContactForm"

const Footer = () => (
  <div className="footer">
<footer className="page-footer">
  <div className="row">
    <div className="col l6 s12">
      <h5 className="white-text">Thank you!</h5>
      <p className="grey-text text-lighten-4">You guys are the real MVP. Time to live like one!</p>
    </div>
    <div className="col l4 offset-l2 s12">
        <ContactForm/>
      {/* <h5 className="white-text">Links</h5>
      <ul>
        <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
        <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
        <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
        <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
      </ul> */}
    </div>
  </div>
<div className="footer-copyright">
  <div className="container">
  © 2021 Milano Ent.
  </div>
</div>
</footer>
</div>

);

export default Footer;
