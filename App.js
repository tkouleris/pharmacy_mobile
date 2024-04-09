import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import {useEffect, useLayoutEffect, useState} from "react";
import Pharmacies from "./components/Pharmacies";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Districts from "./components/Districts";
import {Ionicons} from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
export default function App() {

    // const [pharmaciesCopy, setPharmaciesCopy] = useState([])
    const [pharmacies, setPharmacies] = useState([])
    const [districts, setDistricts] = useState([])
    const [districtOption, setDistrictOption] = useState('All')

    useLayoutEffect(() => {
        let data = getData().then((data)=>{
            setDistricts(data.districts)
            setPharmacies(data.pharmacies)
            // setPharmaciesCopy(data.pharmacies)
        })

    }, []);

    useEffect(() => {
        console.log('option changed')
    }, [districtOption]);

    // useEffect(() => {
    //         filter(districtOption).then((filtered)=>{
    //             setPharmacies(filtered)
    //             console.log(pharmacies.length)
    //         })
    // }, [pharmacies]);

    async function getData() {
        return {
            "date": "Δευτέρα, 8 Απριλίου 2024",
            "districts": [
                "ΑΓ.ΑΝΑΡΓΥΡΟΙ",
                "ΑΓ.ΒΑΡΒΑΡΑ",
                "ΑΓ.ΔΗΜΗΤΡΙΟΣ",
                "ΑΓ.ΙΩΑΝΝΗΣ ΒΟΥΛΙΑΓΜΕΝΗΣ",
                "ΑΓ.ΣΤΕΦΑΝΟΣ",
                "ΑΙΓΑΛΕΩ",
                "ΑΛΙΜΟΣ",
                "ΑΜΠΕΛΟΚΗΠΟΙ",
                "ΑΝΩ ΛΙΟΣΙΑ",
                "ΑΡΓΥΡΟΥΠΟΛΗ",
                "ΑΡΤΕΜΙΣ",
                "ΑΣΠΡΟΠΥΡΓΟΣ",
                "ΑΥΛΩΝΑΣ",
                "ΑΦΙΔΝΑΙ",
                "ΑΧΑΡΝΑΙ",
                "ΒΟΥΛΙΑΓΜΕΝΗ",
                "ΓΑΛΑΤΣΙ",
                "ΓΕΡΑΚΑΣ",
                "ΓΚΥΖΗ",
                "ΓΛΥΚΑ ΝΕΡΑ",
                "ΓΛΥΦΑΔΑ",
                "ΕΛΕΥΣΙΝΑ",
                "ΖΩΓΡΑΦΟΥ",
                "ΗΛΙΟΥΠΟΛΗ",
                "ΙΛΙΟΝ",
                "ΚΑΛΛΙΘΕΑ",
                "ΚΑΛΥΒΙΑ ΘΟΡΙΚΟΥ",
                "ΚΕΝΤΡΟ",
                "ΚΕΡΑΤΕΑ",
                "ΚΗΦΙΣΙΑ",
                "ΚΟΡΩΠΙ",
                "ΚΟΥΚΑΚΙ",
                "ΚΥΨΕΛΗ",
                "ΛΑΓΟΝΗΣΙ",
                "ΛΑΥΡΙΟ",
                "ΜΑΝΔΡΑ",
                "ΜΑΡΑΘΩΝΑΣ",
                "ΜΑΡΚΟΠΟΥΛΟ",
                "ΜΑΡΟΥΣΙ",
                "ΜΕΓΑΡΑ",
                "Ν.ΗΡΑΚΛΕΙΟ",
                "Ν.ΙΩΝΙΑ",
                "Ν.ΜΑΚΡΗ",
                "Ν.ΣΜΥΡΝΗ",
                "Π.ΠΕΝΤΕΛΗ",
                "Π.ΦΑΛΗΡΟ",
                "ΠΑΓΚΡΑΤΙ ΝΕΟ",
                "ΠΑΛΛΗΝΗ",
                "ΠΑΤΗΣΙΑ ΑΝΩ",
                "ΠΑΤΗΣΙΑ ΚΑΤΩ",
                "ΠΕΡΙΣΤΕΡΙ",
                "ΠΕΤΡΑΛΩΝΑ ΑΝΩ",
                "ΠΕΤΡΟΥΠΟΛΗ",
                "ΠΕΥΚΗ",
                "ΠΛ.ΒΑΘΗ",
                "ΠΛ.ΚΟΛΙΑΤΣΟΥ",
                "ΡΑΦΗΝΑ",
                "ΣΕΠΟΛΙΑ",
                "ΣΠΑΤΑ",
                "ΣΥΝΤΑΓΜΑ",
                "ΧΑΙΔΑΡΙ",
                "ΧΑΛΑΝΔΡΙ",
                "ΧΑΛΚΟΥΤΣΙ",
                "ΧΟΛΑΡΓΟΣ"
            ],
            "pharmacies": [
                {
                    "dieuthinsi": "ΑΓ.ΑΝΑΡΓΥΡΩΝ  32 ΚΑΙ ΣΟΦ. ΒΕΝΙΖΕΛΟΥ",
                    "farmakeio": "ΚΟΥΖΩΦ ΘΕΟΔΩΡΑ - ΜΑΡΑΒΕΓΙΑΣ ΜΑΡΙΟΣ Ο.Ε.",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΑΓ.ΑΝΑΡΓΥΡΟΙ",
                    "tilefono": "2102610275"
                },
                {
                    "dieuthinsi": "ΕΛ.ΒΕΝΙΖΕΛΟΥ 9",
                    "farmakeio": "ΒΑΙΟΠΟΥΛΟΥ ΔΕΣΠΟΙΝΑ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΑΓ.ΒΑΡΒΑΡΑ",
                    "tilefono": "2105397744"
                },
                {
                    "dieuthinsi": "ΝΑΥΑΡΧΟΥ ΝΟΤΑΡΑ 60",
                    "farmakeio": "ΤΣΟΚΑ ΑΛΕΞΑΝΔΡΑ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΑΓ.ΔΗΜΗΤΡΙΟΣ",
                    "tilefono": "2109732803"
                },
                {
                    "dieuthinsi": "ΚΑΦΑΝΤΑΡΗ 3-ΒΟΥΛΙΑΓΜΕΝΗΣ",
                    "farmakeio": "ΠΑΡΘΥΜΟΣ ΓΕΩΡΓΙΟΣ ΚΑΙ ΣΙΑ Ε.Ε.",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                    "perioxi": "ΑΓ.ΙΩΑΝΝΗΣ ΒΟΥΛΙΑΓΜΕΝΗΣ",
                    "tilefono": "2109019785"
                },
                {
                    "dieuthinsi": "ΓΡΗΓ. ΛΑΜΠΡΑΚΗ 1",
                    "farmakeio": "ΓΟΥΗΤΕΛ ΕΛΕΝΑ",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ ΗΜΕΡΑΣ",
                    "perioxi": "ΑΓ.ΣΤΕΦΑΝΟΣ",
                    "tilefono": "2108141137"
                },
                {
                    "dieuthinsi": "ΜΙΝΩΟΣ 53",
                    "farmakeio": "ΣΠΥΡΛΙΔΑΚΗΣ ΣΠΥΡΙΔΩΝ ΚΑΙ ΣΙΑ ΟΕ.",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                    "perioxi": "ΑΙΓΑΛΕΩ",
                    "tilefono": "2105610098"
                },
                {
                    "dieuthinsi": "ΑΝΔΡΟΥΤΣΟΥ 8",
                    "farmakeio": "ΚΟΡΩΝΑΙΟΣ ΘΕΟΔΩΡΟΣ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΑΛΙΜΟΣ",
                    "tilefono": "2109889963"
                },
                {
                    "dieuthinsi": "ΜΕΣΟΓΕΙΩΝ 109-111",
                    "farmakeio": "ΚΟΛΟΚΟΥΡΗ ΕΛΕΝΗ - ΧΡΥΣΙΚΟΠΟΥΛΟΥ ΓΕΩΡΓΙΑ ΚΑΙ ΣΙΑ Ο.Ε.",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                    "perioxi": "ΑΜΠΕΛΟΚΗΠΟΙ",
                    "tilefono": "2106984953"
                },
                {
                    "dieuthinsi": "Λ. ΚΗΦΙΣΙΑΣ 39",
                    "farmakeio": "ΠΑΥΛΟΠΟΥΛΟΥ ΜΑΓΔΑΛΗΝΗ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΑΜΠΕΛΟΚΗΠΟΙ",
                    "tilefono": "2121041568"
                },
                {
                    "dieuthinsi": "ΙΟΝΙΟΥ ΠΕΛΑΓΟΥΣ 42Β ΚΑΙ ΠΗΝΕΙΟΥ",
                    "farmakeio": "ΦΡΑΓΚΟΥ ΑΡΤΑ ΚΑΙ ΣΙΑ ΟΕ.",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΑΝΩ ΛΙΟΣΙΑ",
                    "tilefono": "2102474311"
                },
                {
                    "dieuthinsi": "ΘΗΡΑΣ 102-ΤΡΑΠΕΖΟΥΝΤΟΣ",
                    "farmakeio": "ΑΦΕΝΔΡΑ ΜΑΡΙΑ ΑΝΝΑ",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                    "perioxi": "ΑΡΓΥΡΟΥΠΟΛΗ",
                    "tilefono": "2109955268"
                },
                {
                    "dieuthinsi": "ΛΕΩΦ. ΒΡΑΥΡΩΝΟΣ 74",
                    "farmakeio": "ΠΟΤΑΜΙΑΝΟΥ ΑΓΓΕΛΙΚΗ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΑΡΤΕΜΙΣ",
                    "tilefono": "2294085120"
                },
                {
                    "dieuthinsi": "ΕΙΡΗΝΗΣ 30  ΚΑΙ ΙΩΑΝ.ΠΡΟΔΡΟΜΟΥ",
                    "farmakeio": "ΚΑΜΠΟΛΗΣ ΔΗΜΗΤΡΙΟΣ",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ ΗΜΕΡΑΣ",
                    "perioxi": "ΑΣΠΡΟΠΥΡΓΟΣ",
                    "tilefono": "2105574683"
                },
                {
                    "dieuthinsi": "ΣΤΑΜΑΤΙΟΥ ΜΠΟΥΓΕΣΗ 8",
                    "farmakeio": "ΛΕΚΚΑΣ ΝΙΚΟΛΑΟΣ",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ ΗΜΕΡΑΣ",
                    "perioxi": "ΑΥΛΩΝΑΣ",
                    "tilefono": "2295041673"
                },
                {
                    "dieuthinsi": "ΑΦΙΔΝΑΙ",
                    "farmakeio": "ΚΟΡΟΒΕΣΗ ΣΟΦΙΑ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 8 ΒΡΑΔΥ",
                    "perioxi": "ΑΦΙΔΝΑΙ",
                    "tilefono": "2295022500"
                },
                {
                    "dieuthinsi": "ΑΓ.ΔΙΟΝΥΣΙΟΥ 82",
                    "farmakeio": "ΜΠΟΥΝΤΖΑΝ ΡΟΥΣΛΑΝ",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                    "perioxi": "ΑΧΑΡΝΑΙ",
                    "tilefono": "2102444771"
                },
                {
                    "dieuthinsi": "ΑΛ.ΠΑΝΑΓΟΥΛΗ 13",
                    "farmakeio": "ΤΣΙΡΛΗ ΑΝΝΑ",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                    "perioxi": "ΒΟΥΛΙΑΓΜΕΝΗ",
                    "tilefono": "2108900203"
                },
                {
                    "dieuthinsi": "ΓΑΛΑΤΣΙΟΥ-ΚΑΡΑΙΣΚΑΚΗ 3",
                    "farmakeio": "ΧΡΙΣΤΟΔΟΥΛΟΥ ΑΙΚΑΤΕΡΙΝΗ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΓΑΛΑΤΣΙ",
                    "tilefono": "2102923480"
                },
                {
                    "dieuthinsi": "ΛΕΩΦ. ΣΠΑΤΩΝ 56 ΚΑΙ ΣΙΚΕΛΙΑΝΟΥ",
                    "farmakeio": "ΘΕΟΧΑΡΗΣ ΚΩΝΣΤΑΝΤΙΝΟΣ - ΦΩΤΙΟΣ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΓΕΡΑΚΑΣ",
                    "tilefono": "2106610601"
                },
                {
                    "dieuthinsi": "ΜΟΜΦΕΡΑΤΟΥ 93-ΠΑΝΑΓΙΩΤΑΡΑ",
                    "farmakeio": "ΝΟΥΣΚΑ ΑΘΗΝΑ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                    "perioxi": "ΓΚΥΖΗ",
                    "tilefono": "2106462770"
                },
                {
                    "dieuthinsi": "ΑΝΝΗΣ ΜΑΡΙΑΣ 19",
                    "farmakeio": "ΓΕΡΑΡΔΗ ΜΑΡΙΑ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΓΛΥΚΑ ΝΕΡΑ",
                    "tilefono": "2106659265"
                },
                {
                    "dieuthinsi": "ΓΕΩΡΓ. ΓΕΝΝΗΜΑΤΑ 97",
                    "farmakeio": "ΚΑΝΑΡΗ ΕΛΕΝΗ - ΑΝΔΡΙΑΝΑ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΓΛΥΦΑΔΑ",
                    "tilefono": "2109625020"
                },
                {
                    "dieuthinsi": "ΒΑΣ. ΓΕΩΡΓΙΟΥ Β 10",
                    "farmakeio": "ΜΠΙΡΜΠΑΣ ΜΙΛΤΙΑΔΗΣ - ΧΑΡΑΛΑΜΠΟΣ",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                    "perioxi": "ΓΛΥΦΑΔΑ",
                    "tilefono": "2108983447"
                },
                {
                    "dieuthinsi": "ΕΘΝ.ΑΝΤΙΣΤΑΣΕΩΣ 88",
                    "farmakeio": "ΣΤΥΛΙΑΡΑ  ΕΛΕΝΗ - ΜΑΡΟΥΓΚΑ  ΑΘΗΝΑ Ο.Ε. ( ΜΕDICARE PHARMACIES )",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ ΗΜΕΡΑΣ",
                    "perioxi": "ΕΛΕΥΣΙΝΑ",
                    "tilefono": "2105541216"
                },
                {
                    "dieuthinsi": "Γ.ΠΑΠΑΝΔΡΕΟΥ 4",
                    "farmakeio": "ΣΙΓΑΝΟΥ ΣΤΑΥΡΟΥΛΑ ΣΙΓΑΝΟΥ ΑΝΔΡΙΑΝΗ  Ο.Ε",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                    "perioxi": "ΖΩΓΡΑΦΟΥ",
                    "tilefono": "2107771119"
                },
                {
                    "dieuthinsi": "Λ.ΔΗΜΟΚΡΑΤΙΑΣ 35",
                    "farmakeio": "ΚΟΜΙΑΝΟΥ ΑΙΚΑΤΕΡΙΝΗ ΧΡΙΣΤΙΝΑ",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                    "perioxi": "ΗΛΙΟΥΠΟΛΗ",
                    "tilefono": "2109730470"
                },
                {
                    "dieuthinsi": "ΠΛΑΤΕΙΑ  ΕΘΝΙΚΗΣ ΑΝΤΙΣΤΑΣΕΩΣ  5 Α",
                    "farmakeio": "ΣΑΠΟΡΙΤΑ ΣΑΛΒΑΤΟΡΕ ΚΑΙ ΣΙΑ ΟΕ.( 3 )",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΗΛΙΟΥΠΟΛΗ",
                    "tilefono": "2130454662"
                },
                {
                    "dieuthinsi": "ΚΩΝ/ΠΟΛΕΩΣ 106 ΚΑΙ Π.ΜΕΛΑ",
                    "farmakeio": "ΠΑΠΑΔΗΜΗΤΡΙΟΥ ΣΑΡΑΝΤΟΣ",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                    "perioxi": "ΙΛΙΟΝ",
                    "tilefono": "2105017724"
                },
                {
                    "dieuthinsi": "ΔΗΜΟΣΘΕΝΟΥΣ 88",
                    "farmakeio": "ΦΟΥΣΚΑΡΗΣ ΠΑΝΑΓΙΩΤΗΣ",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                    "perioxi": "ΚΑΛΛΙΘΕΑ",
                    "tilefono": "2109571722"
                },
                {
                    "dieuthinsi": "ΧΡ.ΡΑΠΤΗ 43",
                    "farmakeio": "ΚΟΥΡΗΣ ΛΑΜΠΡΟΣ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΚΑΛΥΒΙΑ ΘΟΡΙΚΟΥ",
                    "tilefono": "2299047033"
                },
                {
                    "dieuthinsi": "ΣΟΛΩΝΟΣ 60",
                    "farmakeio": "ΤΖΕΜΟΣ ΓΡΗΓΟΡΙΟΣ ΚΑΙ ΣΙΑ Ο.Ε.( 2 )",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                    "perioxi": "ΚΕΝΤΡΟ",
                    "tilefono": "2103600060"
                },
                {
                    "dieuthinsi": "Λ.ΑΘΗΝΩΝ-ΣΟΥΝΙΟΥ 11",
                    "farmakeio": "ΤΑΚΑΚΗ ΚΑΛΛΙΟΠΗ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΚΕΡΑΤΕΑ",
                    "tilefono": "2299042515"
                },
                {
                    "dieuthinsi": "ΧΑΡ.ΤΡΙΚΟΥΠΗ  171",
                    "farmakeio": "ΗΛΙΟΠΟΥΛΟΥ ΑΘΑΝΑΣΙΑ",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                    "perioxi": "ΚΗΦΙΣΙΑ",
                    "tilefono": "2106200532"
                },
                {
                    "dieuthinsi": "ΒΑΣ.ΚΩΝΣΤΑΝΤΙΝΟΥ 137",
                    "farmakeio": "ΝΙΚΟΛΑΚΗ ΠΑΡΑΣΚΕΥΗ ΚΑΙ ΣΙΑ Ε.Ε.",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΚΟΡΩΠΙ",
                    "tilefono": "2106627487"
                },
                {
                    "dieuthinsi": "ΒΕΙΚΟΥ 23 - 25",
                    "farmakeio": "ΠΑΣΙΑΛΗ-ΤΣΙΤΣΕΚΛΗ ΜΑΓΔΑΛΗΝΗ - ΤΣΙΤΣΕΚΛΗΣ ΕΥΑΓΓΕΛΟΣ Ο.Ε.",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                    "perioxi": "ΚΟΥΚΑΚΙ",
                    "tilefono": "2109220783"
                },
                {
                    "dieuthinsi": "ΚΥΨΕΛΗΣ 80",
                    "farmakeio": "ΤΣΙΡΑΚΗΣ  ΒΑΣΙΛΕΙΟΣ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                    "perioxi": "ΚΥΨΕΛΗ",
                    "tilefono": "2108214124"
                },
                {
                    "dieuthinsi": "ΛΕΩΦ.ΚΑΛΥΒΙΩΝ ΚΑΙ ΦΙΛΟΠΑΠΠΟΥ",
                    "farmakeio": "ΑΠΟΣΤΟΛΟΥ ΧΡΗΣΤΟΣ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΛΑΓΟΝΗΣΙ",
                    "tilefono": "2291023037"
                },
                {
                    "dieuthinsi": "ΒΑΣ.ΓΕΩΡΓΙΟΥ ΚΑΙ ΕΡΜΟΥ",
                    "farmakeio": "ΖΑΓΟΥΡΗ ΓΕΩΡΓΙΑ ΚΑΙ ΣΙΑ Ο.Ε.",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΛΑΥΡΙΟ",
                    "tilefono": "2292024333"
                },
                {
                    "dieuthinsi": "ΚΟΡΟΠΟΥΛΗ  25",
                    "farmakeio": "ΓΙΑΝΝΟΥ ΓΕΩΡΓΙΟΣ",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ ΗΜΕΡΑΣ",
                    "perioxi": "ΜΑΝΔΡΑ",
                    "tilefono": "2105555844"
                },
                {
                    "dieuthinsi": "ΛΕΩΦ. ΚΑΤΩ ΣΟΥΛΙΟΥ 131",
                    "farmakeio": "ΜΠΟΤΣΗΣ ΣΤΑΜΑΤΙΟΣ",
                    "katastasi": "False",
                    "orario": "11 ΒΡΑΔΥ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                    "perioxi": "ΜΑΡΑΘΩΝΑΣ",
                    "tilefono": "2294067519"
                },
                {
                    "dieuthinsi": "ΠΛΑΤΕΙΑ ΣΩΤΗΡΙΟΥ 31",
                    "farmakeio": "ΒΕΡΓΙΝΗΣ ΙΩΑΝΝΗΣ ΚΑΙ ΣΙΑ Ο.Ε.",
                    "katastasi": "False",
                    "orario": "11 ΒΡΑΔΥ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                    "perioxi": "ΜΑΡΚΟΠΟΥΛΟ",
                    "tilefono": "2299022500"
                },
                {
                    "dieuthinsi": "Λ.Π.ΡΑΦΤΗ 4",
                    "farmakeio": "ΔΡΑΚΟΥ ΜΑΡΙΑ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΜΑΡΚΟΠΟΥΛΟ",
                    "tilefono": "2299025192"
                },
                {
                    "dieuthinsi": "ΔΙΟΝΥΣΟΥ 43",
                    "farmakeio": "ΔΡΟΣΟΥ ΑΙΚΑΤΕΡΙΝΗ",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                    "perioxi": "ΜΑΡΟΥΣΙ",
                    "tilefono": "2108067628"
                },
                {
                    "dieuthinsi": "ΣΩΤΗΡΟΣ 19",
                    "farmakeio": "ΚΟΥΡΣΟΠΟΥΛΟΣ ΙΩΑΝΝΗΣ",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ ΗΜΕΡΑΣ",
                    "perioxi": "ΜΕΓΑΡΑ",
                    "tilefono": "2296029290"
                },
                {
                    "dieuthinsi": "ΠΡΑΣΙΝΟΥ ΛΟΦΟΥ 6",
                    "farmakeio": "ΧΡΙΣΤΟΦΙΔΗΣ ΧΡΗΣΤΟΣ-ΧΡΙΣΤΟΦΙΔΗΣ ΣΩΤΗΡΙΟΣ Ο.Ε.",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                    "perioxi": "Ν.ΗΡΑΚΛΕΙΟ",
                    "tilefono": "2102822118"
                },
                {
                    "dieuthinsi": "ΕΛ ΑΛΑΜΕΙΝ 40 ΚΑΙ ΦΙΛΗΝΤΑ 1",
                    "farmakeio": "ΣΚΟΥΤΑΡΗ ΑΝΑΣΤΑΣΙΑ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "Ν.ΙΩΝΙΑ",
                    "tilefono": "2102712016"
                },
                {
                    "dieuthinsi": "34 ΧΛΜ Λ.ΜΑΡΑΘΩΝΟΣ",
                    "farmakeio": "ΧΑΛΜΟΥΚΗ-ΧΑΡΗ ΠΗΝΕΛΟΠΗ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "Ν.ΜΑΚΡΗ",
                    "tilefono": "2294096495"
                },
                {
                    "dieuthinsi": "Κ.ΠΑΛΑΙΟΛΟΓΟΥ 27",
                    "farmakeio": "ΚΑΡΑΝΤΩΝΗ ΑΝΤΩΝΙΑ-ΚΑΤΣΙΓΙΑΝΝΗ Π. ΚΑΙ ΣΙΑ Ο.Ε.",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "Ν.ΣΜΥΡΝΗ",
                    "tilefono": "2109331896"
                },
                {
                    "dieuthinsi": "ΒΑΣ.ΓΕΩΡΓΙΟΥ Β 3",
                    "farmakeio": "ΚΩΤΣΟΓΙΑΝΝΗ ΔΗΜΗΤΡΑ",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                    "perioxi": "Π.ΠΕΝΤΕΛΗ",
                    "tilefono": "2108030209"
                },
                {
                    "dieuthinsi": "ΕΛ. ΒΕΝΙΖΕΛΟΥ  216",
                    "farmakeio": "ΚΟΖΩΝΗ ΧΡΥΣΟΥΛΑ",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                    "perioxi": "Π.ΦΑΛΗΡΟ",
                    "tilefono": "2109848958"
                },
                {
                    "dieuthinsi": "ΝΙΚΗΦΟΡΙΔΗ 35",
                    "farmakeio": "ΒΡΟΝΤΟΥ ΒΑΣΙΛΙΚΗ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΠΑΓΚΡΑΤΙ ΝΕΟ",
                    "tilefono": "2107653696"
                },
                {
                    "dieuthinsi": "ΒΥΖΑΝΤΙΟΥ 9",
                    "farmakeio": "ΒΑΛΚΑΝΟΣ ΕΥΑΓΓΕΛΟΣ Ο.Ε.",
                    "katastasi": "False",
                    "orario": "11 ΒΡΑΔΥ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                    "perioxi": "ΠΑΛΛΗΝΗ",
                    "tilefono": "2106669613"
                },
                {
                    "dieuthinsi": "ΑΝΔΡΟΥΤΣΟΥ 13",
                    "farmakeio": "ΜΠΕΖΕΡΙΑΝΟΣ ΔΗΜΗΤΡΙΟΣ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΠΑΛΛΗΝΗ",
                    "tilefono": "2106030666"
                },
                {
                    "dieuthinsi": "ΚΟΝΔΥΛΑΚΗ 1 ΚΑΙ ΠΛΑΤΕΙΑ ΠΑΠΑΔΙΑΜΑΝΤΗ",
                    "farmakeio": "ΓΙΑΖΝΤΑΝΙ ΖΟΝΟΥΖ ΣΙΝΑ ( ΦΑΡΜΑΚΕΙΟ Γ.ΒΑΚΙΡΛΗ ΚΑΙ ΣΙΑ Ο.Ε.)",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                    "perioxi": "ΠΑΤΗΣΙΑ ΑΝΩ",
                    "tilefono": "2102019208"
                },
                {
                    "dieuthinsi": "ΜΙΧΑΗΛ ΒΟΔΑ 195",
                    "farmakeio": "ΣΚΟΥΤΕΛΗ ΕΛΙΖΑ ΚΑΙ ΣΙΑ Ε.Ε. (Pharmacy Pireos 26)",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΠΑΤΗΣΙΑ ΚΑΤΩ",
                    "tilefono": "2105236300"
                },
                {
                    "dieuthinsi": "ΜΩΡΟΓΙΑΝΝΗ  17 ΚΑΙ  ΙΟΥ",
                    "farmakeio": "ΚΟΥΚΟΥΒΙΝΟΥ ΓΕΩΡΓΙΑ-ΠΑΤΑΠΙΑ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΠΕΡΙΣΤΕΡΙ",
                    "tilefono": "2105722582"
                },
                {
                    "dieuthinsi": "ΘΗΒΩΝ 86",
                    "farmakeio": "ΠΕΤΡΟΠΟΥΛΟΣ ΙΩΑΝΝΗΣ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΠΕΡΙΣΤΕΡΙ",
                    "tilefono": "2105717579"
                },
                {
                    "dieuthinsi": "ΑΓ. ΙΕΡΟΘΕΟΥ 75",
                    "farmakeio": "ΨΑΘΑ ΜΑΡΙΑ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                    "perioxi": "ΠΕΡΙΣΤΕΡΙ",
                    "tilefono": "2105770803"
                },
                {
                    "dieuthinsi": "ΔΡΥΟΠΩΝ 5-7",
                    "farmakeio": "ΓΟΥΛΑΚΟΣ ΣΠΥΡΙΔΩΝ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΠΕΤΡΑΛΩΝΑ ΑΝΩ",
                    "tilefono": "2103470014"
                },
                {
                    "dieuthinsi": "ΕΛ. ΒΕΝΙΖΕΛΟΥ 129",
                    "farmakeio": "ΜΑΚΡΥΔΑΚΗ ΜΑΡΙΑ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΠΕΤΡΟΥΠΟΛΗ",
                    "tilefono": "2105061558"
                },
                {
                    "dieuthinsi": "ΒΙΤΣΙ 14",
                    "farmakeio": "ΓΚΕΡΜΠΕΣΙΩΤΟΥ ΑΙΚΑΤΕΡΙΝΗ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΠΕΥΚΗ",
                    "tilefono": "2108029271"
                },
                {
                    "dieuthinsi": "ΚΑΡΟΛΟΥ 27-ΠΛ.ΚΑΡΑΙΣΚΑΚΗ",
                    "farmakeio": "ΧΡΙΣΤΟΦΙΔΟΥ ΓΛΑΥΚΗ - ΕΛΕΥΘΕΡΙΑ",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                    "perioxi": "ΠΛ.ΒΑΘΗ",
                    "tilefono": "2105234074"
                },
                {
                    "dieuthinsi": "Ι.ΔΡΟΣΟΠΟΥΛΟΥ 187 ΚΑΙ ΚΕΑΣ 9",
                    "farmakeio": "ΒΑΛΑΤΣΟΣ ΔΗΜΗΤΡΙΟΣ (Ε.ΘΕΟΔΩΡΟΠΟΥΛΟΥ ) Ε.Ε.",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                    "perioxi": "ΠΛ.ΚΟΛΙΑΤΣΟΥ",
                    "tilefono": "2102281565"
                },
                {
                    "dieuthinsi": "ΕΘΝ.ΑΝΤΙΣΤΑΣΕΩΣ  10",
                    "farmakeio": "ΛΟΥΙΖΟΣ ΝΙΚΟΛΑΟΣ  ΚΑΙ  ΣΙΑ Ο.Ε. (ΔΕΥΤΕΡΟ ΦΑΡΜ )",
                    "katastasi": "False",
                    "orario": "11 ΒΡΑΔΥ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                    "perioxi": "ΡΑΦΗΝΑ",
                    "tilefono": "2294025558"
                },
                {
                    "dieuthinsi": "ΚΥΠΡΙΩΝ ΑΓΩΝΙΣΤΩΝ 17",
                    "farmakeio": "ΤΣΩΚΟΥ ΑΝΑΣΤΑΣΙΑ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΡΑΦΗΝΑ",
                    "tilefono": "2294026526"
                },
                {
                    "dieuthinsi": "ΚΡΕΟΝΤΟΣ 159",
                    "farmakeio": "ΜΙΧΑΗΛΙΔΗΣ ΚΩΝΣΤΑΝΤΙΝΟΣ - ΜΙΧΑΗΛΙΔΗ ΜΕΛΙΝΑ Ο.Ε.",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                    "perioxi": "ΣΕΠΟΛΙΑ",
                    "tilefono": "2105142631"
                },
                {
                    "dieuthinsi": "ΒΑΣ.ΠΑΥΛΟΥ  86",
                    "farmakeio": "ΤΖΑΝΑΚΗΣ ΕΛΕΥΘΕΡΙΟΣ-ΤΖΑΝΑΚΗ ΣΤΑΥΡΟΥΛΑ Ο.Ε.",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΣΠΑΤΑ",
                    "tilefono": "2106634834"
                },
                {
                    "dieuthinsi": "ΜΗΤΡΟΠΟΛΕΩΣ  54",
                    "farmakeio": "ΛΩΛΑΣ ΠΕΤΡΟΣ",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΣΥΝΤΑΓΜΑ",
                    "tilefono": "2103310052"
                },
                {
                    "dieuthinsi": "ΠΛΑΤΩΝΟΣ 34",
                    "farmakeio": "ΓΕΩΡΓΟΠΟΥΛΟΥ ΑΔΑΜΑΝΤΙΑ - ΜΑΡΙΑ",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                    "perioxi": "ΧΑΙΔΑΡΙ",
                    "tilefono": "2105324590"
                },
                {
                    "dieuthinsi": "ΠΛΑΤΩΝΟΣ 9",
                    "farmakeio": "ΜΑΡΤΣΟΥΚΑΣ ΜΑΡΙΟΣ",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                    "perioxi": "ΧΑΛΑΝΔΡΙ",
                    "tilefono": "2106820071"
                },
                {
                    "dieuthinsi": "ΑΓΙΟΥ ΑΝΤΩΝΙΟΥ 116",
                    "farmakeio": "ΣΑΛΙΒΕΡΟΥ ΜΑΡΙΑΝΝΑ (ΔΟΥΚΑΣ ΙΩΑΝΝΗΣ) Ο.Ε.",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                    "perioxi": "ΧΑΛΑΝΔΡΙ",
                    "tilefono": "2106396162"
                },
                {
                    "dieuthinsi": "ΔΟΥΚ.ΠΛΑΚΕΝΤΙΑΣ 29",
                    "farmakeio": "ΤΡΕΜΠΕΛΑ ΕΥΔΟΞΙΑ ΚΑΙ ΣΙΑ Ο.Ε.",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΧΑΛΑΝΔΡΙ",
                    "tilefono": "2106890949"
                },
                {
                    "dieuthinsi": "ΠΛΑΤΕΙΑ ΧΑΛΚΟΥΤΣΙΟΥ",
                    "farmakeio": "ΡΑΠΤΗΣ ΑΛΚΙΒΙΑΔΗΣ",
                    "katastasi": "True",
                    "orario": "8 ΠΡΩΙ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ ΗΜΕΡΑΣ",
                    "perioxi": "ΧΑΛΚΟΥΤΣΙ",
                    "tilefono": "2295071920"
                },
                {
                    "dieuthinsi": "17 ΝΟΕΜΒΡΙΟΥ 6",
                    "farmakeio": "ΚΩΝΣΤΑ ΚΑΛΗ ΚΑΙ ΣΙΑ Ο.Ε.",
                    "katastasi": "False",
                    "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                    "perioxi": "ΧΟΛΑΡΓΟΣ",
                    "tilefono": "2106511792"
                }
            ]
        }
    }

    function menu(navigation, districts){
        console.log(pharmacies.length)
        navigation.navigate('Districts', {'districts': districts})
    }

    function selectDistrict(district){
       setDistrictOption(district)
    }

    async function filter(query){
        return pharmacies.filter((item) => {
            return item.perioxi === query
        })
    }

    return (
        <NavigationContainer>
            <StatusBar style="dark"/>
            <Stack.Navigator>
                <Stack.Screen
                    name="Pharmacies"
                    options={({navigation}) => ({
                        title: 'Pharmacies',
                        headerTitleAlign: 'center',
                        headerLeft: ({tintColor}) => (
                            <Ionicons
                                icon="menu"
                                size={24}
                                color={tintColor}
                                style={{marginRight: 15}}
                                onPress={menu.bind(this,navigation, districts)}
                                name="menu"
                            />
                        ),
                        // headerRight: ({tintColor}) => (
                        //     <Ionicons
                        //         icon="add"
                        //         size={24}
                        //         color={tintColor}
                        //         onPress={refresh}
                        //         name="refresh"
                        //     />
                        // )
                    })}
                >
                    {props => <Pharmacies {...props} pharmacies={pharmacies}/>}
                </Stack.Screen>
                <Stack.Screen name="Districts">
                    {props => <Districts {...props} districts={districts} onSelect={selectDistrict} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAE4E2',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
