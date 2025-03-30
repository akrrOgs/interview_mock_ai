import Agent from "@/components/Agent";
import { getCurrentUsers } from "@/lib/actions/auth.actions";

const Page = async () => {
  const user = await getCurrentUsers();

  return (
    <>
      <h3>Interview Generation</h3>

      <Agent userName={user?.name} userId={user?.id} type="generate" />
    </>
  );
};

export default Page;
