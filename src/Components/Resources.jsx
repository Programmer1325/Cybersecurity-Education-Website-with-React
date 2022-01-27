import React from "react";

function Resources() {
  return (
    <div className="Resources-Body">
      <div className="Design"></div>
      <div className="Design2"></div>

      <h1 className="Heading">What are the different types of cyberthreats</h1>
      <p className="Text">There are 6 different cyber threats. They are</p>
      <ol className="List">
        <li className="Item">
          <p className="Text">
            Malware. Malware is a malicious software such as spyware,
            ransomware, viruses amd worms. Malware can downloaded, when a user
            clicks on a malicious attachment, link or downloads something.
          </p>
        </li>
        <li className="Item">
          <p className="Text">
            Denial of Service (DoS). A Denial of Service attack is a type of
            attack which floods a computer or network with too much information
            causing it to not be able to respond to requests.
          </p>
        </li>
        <li className="Item">
          <p className="Text">
            Man in the Middle (MitM). A Man in the Middle attack is exactly what
            it sounds like. The hacker puts himself in between a two party
            transaction. He can filter and read all the data passing through a
            network.
          </p>
        </li>
        <li className="Item">
          <p className="Text">
            Phishing. Phishing attacks use fake ID's to trick the user into
            thinking they are valid sources, and making the user download and
            run a malicious software.
          </p>
        </li>
        <li className="Item">
          <p className="Text">
            SQL Injection (SQLi). A SQL Injection attacks work by injecting code
            into a vulnerable search box, tricking the server into giving the
            hackers all the information.
          </p>
        </li>
        <li className="Item">
          <p className="Text">
            Password Attacks. The Password attack is one of the most common type
            of cyber attacks which happen on the internet. This is because
            almost everything on the internet requires a password, meaning all
            their personal information is protected by a password. But the
            problem is that because there are so many websites which requires a
            password, people tend to put the same password for every website,
            meaning its easy for the attackers to guess.
          </p>
        </li>
      </ol>
    </div>
  );
}

export default Resources;
