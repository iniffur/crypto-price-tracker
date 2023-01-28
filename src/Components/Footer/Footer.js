import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <div class="footer " className="p-2 text-center bg-light">
      <h4 className="mb-4">
        Created by{" "}
        <a
          href="https://www.linkedin.com/in/james-ruffini-5281b016b/"
          target="_blank"
          className="link"
        >
          James Ruffini
        </a>
      </h4>
      <p>
        <a href="https://github.com/iniffur" target="_blank">
          <MDBIcon fab icon="github" size="4x" />
        </a>
      </p>
    </div>
  );
};

export default Footer;
