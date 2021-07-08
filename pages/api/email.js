const sgMail = require("@sendgrid/mail");

export default (req, res) => {
  const body = JSON.parse(req.body);

  sgMail.setApiKey(
    "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"
  );
  const msg = {
    to: "amineamine.dev@gmail.com",
    from: "aamine@bright-lab.com",
    subject: `Email from ${body.name} <?${body.email}>`,
    text: body.subject,
    html: `<p><h3>${body.subject}</h3> ${body.message}</p>`,
  };

  sgMail //to me 
    .send(msg)
    .then(() => {
        console.log('email 1 sent')
      const msg = {
        to: body.email,
        from: "aamine@bright-lab.com",
        subject: `Welcome to Amine Portfolio`,
        text: body.subject,
        html: `<p>
        <div>Dear ${body.name.split(" ")[0]}, </div>
        <br></br>
        <br></br>
        <div>Thank you for getting in touch with me.</div>
        <div>I will get back to you as soon as possible.</div>
        <br></br>
        <br></br>
        Kind Regards,
        <br></br>
        Amine.
        </p>`,
      };

      sgMail // to the user
        .send(msg)
        .then(() => {
            console.log('email 2 sent')
        })
        .catch((error) => {
          console.error(error);
        });

    })
    .catch((error) => {
      console.error(error);
    });
  res.status(200).json({ status: "Ok" });
};
