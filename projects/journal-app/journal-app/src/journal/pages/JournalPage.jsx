import { Typography } from "@mui/material";
import { MailOutline } from '@mui/icons-material';
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
    return (
        <> 
            <JournalLayout>
                {/* <NothingSelectedView /> */}
                <NoteView />
            </JournalLayout>
        </>
    );
}
