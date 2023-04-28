import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { ProfileForm } from './ProfileForm';
import { redirect } from 'next/navigation';
import { SignOutButton } from '@/components/buttons';

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    redirect('/api/auth/signin');
    // return <p>You must be signed in...</p>
  }

  const currentUserEmail = session?.user?.email!;
  const user = await prisma.user.findUnique({
    where: {
      email: currentUserEmail,
    },
  });

  return (
    <>
      <h1>Dashboard</h1>
      <SignOutButton />
      <ProfileForm user={user} />;
    </>
  );
}
