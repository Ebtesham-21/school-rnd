import { Button } from "@/components/ui/button"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/dist/server/api-utils"
import Link from "next/link"

const CoursesPage = () => {
  const {userId} = auth()

  if(!userId) {
    return redirect("/sign-in")
  }


  return (
    <div className="px-6 py-4" >
        <Link href="/instructor/create-course">
            <Button>Create New Course</Button>
        </Link>
    </div>
  )
}

export default CoursesPage