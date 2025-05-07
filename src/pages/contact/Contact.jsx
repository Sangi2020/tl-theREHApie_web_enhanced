import React from "react";
import { Layout } from "../../layouts/Layout";
import { ContactMap } from "../../components/contact/ContactMap";
import { ContactFour } from "../../components/contact/ContactFour";
import HelmetReuse from "../../components/seo/HelmetComponent";

export const Contact = () => {
  return (
    <Layout breadcrumbTitle={"Get In Touch"} breadcrumbSubtitle={"Contact"}>
      <HelmetReuse
        title="Contact theREHApie Consultants | Expert Rehab Consulting in the Middle East"
        description="Get in touch with theREHApie Consultants for expert rehabilitation consulting, distributor sourcing, and business expansion in the Middle East"
        keywords="rehabilitation consulting, medical device market entry, distributor sourcing, Dubai business expansion, Middle East healthcare consulting" />

      {/* map */}
      <ContactMap />

      {/* contact form */}
      <ContactFour />
    </Layout>
  );
};
