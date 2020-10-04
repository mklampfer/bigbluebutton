import Breakouts from '/imports/api/breakouts';
import Auth from '/imports/ui/services/auth';
import Language from "../../components/translations/LanguageField/component";

class MeetingService {
    findBreakouts = () => {
        const BreakoutRooms = Breakouts.find({
            parentMeetingId: Auth.meetingID,
        }, {
            sort: {
                sequence: 1,
            },
        }).fetch();

        return BreakoutRooms;
    };
}

export default MeetingService

