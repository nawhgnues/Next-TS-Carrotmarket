import type { NextPage } from "next";
import Button from "@/src/components/button";
import Layout from "@/src/components/layout";
import TextArea from "@/src/components/textarea";

const Write: NextPage = () => {
  return (
    <Layout canGoBack title="Write Post">
      <form className="p-4 space-y-4">
        <TextArea required placeholder="Ask a question!" />
        <Button text="Submit" />
      </form>
    </Layout>
  );
};

export default Write;
