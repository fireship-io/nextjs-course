import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ProfileForm from '@/components/ProfileForm';
import SignOutButton from '@/components/SignOutButton';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
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
      <ProfileForm user={user} />
    </>
  );
}
