import { Card } from "@/app/components/card";
import Link from "next/link";

export default function ArchivedNotifications(){
    return <Card>
        <div>archived notifications</div>
        <div>
            <Link href={"/complex-dashboard"}>default</Link>
        </div>
    </Card>
}