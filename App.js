import {StatusBar} from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from "react";
import {Ionicons} from "@expo/vector-icons";


export default function App() {

    const [data, setData] = useState([])

    useEffect(() => {
        setData(getData)
    }, []);

    function getData() {
        return [
            {
                "dieuthinsi": "Ν. ΚΑΖΑΝΤΖΑΚΗ 28 ΚΑΙ Μ. ΜΑΥΡΟΓΕΝΟΥΣ 29",
                "farmakeio": "ΓΚΙΛΛΑ ΚΩΝΣΤΑΝΤΙΝΑ ΚΑΙ ΣΙΑ Ο.Ε.",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                "perioxi": "ΑΓ.ΑΝΑΡΓΥΡΟΙ",
                "tilefono": "2108329919"
            },
            {
                "dieuthinsi": "Ν.ΠΛΑΣΤΗΡΑ 60",
                "farmakeio": "ΣΟΥΣΑΝΗΣ ΔΗΜΗΤΡΙΟΣ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                "perioxi": "ΑΓ.ΑΝΑΡΓΥΡΟΙ",
                "tilefono": "2108329174"
            },
            {
                "dieuthinsi": "ΕΛ. ΒΕΝΙΖΕΛΟΥ 126",
                "farmakeio": "ΠΕΦΑΝΗΣ ΗΛΙΑΣ - ΠΕΦΑΝΗΣ ΝΙΚΟΛΑΟΣ Ο.Ε.",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                "perioxi": "ΑΓ.ΒΑΡΒΑΡΑ",
                "tilefono": "2105690708"
            },
            {
                "dieuthinsi": "ΜΕΝΕΛΑΟΥ 13 ΚΑΙ ΣΟΦΟΚΛΕΟΥΣ",
                "farmakeio": "ΜΠΟΥΓΙΑΚΛΗ ΚΥΡΙΑΚΗ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                "perioxi": "ΑΓ.ΔΗΜΗΤΡΙΟΣ",
                "tilefono": "2109718698"
            },
            {
                "dieuthinsi": "Λ. ΜΕΣΟΓΕΙΩΝ 314",
                "farmakeio": "ΝΙΚΗΤΑ ΓΕΩΡΓΙΑ - ΠΑΡΑΣΚΕΥΗ ΚΑΙ ΣΙΑ Ε.Ε.",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΑΓ.ΠΑΡΑΣΚΕΥΗ",
                "tilefono": "2162023895"
            },
            {
                "dieuthinsi": "ΔΕΡΒΕΝΑΚΙΩΝ 78",
                "farmakeio": "ΠΑΠΑΕΥΘΥΜΙΟΥ ΒΑΣΙΛΕΙΟΣ (2ο)",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                "perioxi": "ΑΓ.ΠΑΡΑΣΚΕΥΗ",
                "tilefono": "2117408875"
            },
            {
                "dieuthinsi": "ΠΛΑΤΕΙΑ ΔΗΜΟΚΡΑΤΙΑΣ  7",
                "farmakeio": "ΔΗΜΗΤΡΙΑΔΗΣ  ΤΡΙΑΝΤΑΦΥΛΛΟΣ",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ ΗΜΕΡΑΣ",
                "perioxi": "ΑΓ.ΣΤΕΦΑΝΟΣ",
                "tilefono": "2108141625"
            },
            {
                "dieuthinsi": "ΜΑΓΝΗΣΙΑΣ 48",
                "farmakeio": "ΦΙΝΤΖΟΥ ΕΙΡΗΝΗ ΚΑΙ ΣΙΑ Ο.Ε.",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΑΙΓΑΛΕΩ",
                "tilefono": "2105905126"
            },
            {
                "dieuthinsi": "ΜΕΤΑΜΟΡΦΩΣΕΩΣ 24 ΚΑΙ ΘΕΜΙΣΤΟΚΛΕΟΥΣ 23",
                "farmakeio": "ΦΑΚΑΛΟΣ ΔΗΜΗΤΡΙΟΣ",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                "perioxi": "ΑΛΙΜΟΣ",
                "tilefono": "2109836835"
            },
            {
                "dieuthinsi": "ΠΑΝΟΡΜΟΥ 34",
                "farmakeio": "ΒΟΥΛΓΑΡΑΚΗΣ ΓΕΩΡΓΙΟΣ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΑΜΠΕΛΟΚΗΠΟΙ",
                "tilefono": "2106914630"
            },
            {
                "dieuthinsi": "ΛΕΩΦ. ΚΑΡΑΜΑΝΛΗ 27",
                "farmakeio": "ΚΟΡΙΤΣΙΑΔΗΣ ΣΤΑΥΡΟΣ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΑΝΑΒΥΣΣΟΣ",
                "tilefono": "2291078061"
            },
            {
                "dieuthinsi": "ΛΕΩΦΟΡΟΣ ΦΥΛΗΣ 110",
                "farmakeio": "ΚΥΡΙΑΚΟΠΟΥΛΟΥ ΘΕΟΔΩΡΑ",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                "perioxi": "ΑΝΩ ΛΙΟΣΙΑ",
                "tilefono": "2130990064"
            },
            {
                "dieuthinsi": "ΜΑΡ.ΓΕΡΟΥΛΑΝΟΥ 57",
                "farmakeio": "ΚΕΛΕΠΕΣΗ ΜΑΡΙΑ-ΠΑΠΑΔΗΜΗΤΡΙΟΥ ΕΥΑΓΓΕΛΙΑ Ο.Ε.",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΑΡΓΥΡΟΥΠΟΛΗ",
                "tilefono": "2109932570"
            },
            {
                "dieuthinsi": "ΙΩΑΝ. ΠΡΟΔΡΟΜΟΥ 22 ΚΑΙ ΑΡΤΗΣ (ΤΡΟΛΕΥ)",
                "farmakeio": "ΦΑΝΟΥΡΑΚΗ ΚΥΡΙΑΚΗ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΑΡΤΕΜΙΣ",
                "tilefono": "2294081001"
            },
            {
                "dieuthinsi": "ΣΑΛΑΜΙΝΟΣ 17",
                "farmakeio": "ΛΙΟΣΗ ΙΩΑΝΝΑ - ΚΑΡΑΜΠΟΥΛΑΣ ΣΠΥΡΙΔΩΝ Ο.Ε.",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ ΗΜΕΡΑΣ",
                "perioxi": "ΑΣΠΡΟΠΥΡΓΟΣ",
                "tilefono": "2105576927"
            },
            {
                "dieuthinsi": "ΑΘΗΝΩΝ - ΧΑΛΚΙΔΟΣ 24",
                "farmakeio": "ΜΑΝΙΤΑΡΗΣ ΑΠΟΣΤΟΛΟΣ ΚΑΙ ΣΙΑ Ο.Ε.",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ ΗΜΕΡΑΣ",
                "perioxi": "ΑΥΛΩΝΑΣ",
                "tilefono": "2295041233"
            },
            {
                "dieuthinsi": "ΧΡΥΣΑΝΘΕΜΩΝ 1",
                "farmakeio": "ΘΑΝΟΠΟΥΛΟΥ ΣΤΑΜΑΤΙΝΑ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 8 ΒΡΑΔΥ",
                "perioxi": "ΑΦΙΔΝΑΙ",
                "tilefono": "2295026417"
            },
            {
                "dieuthinsi": "ΠΑΡΝΗΘΟΣ  118",
                "farmakeio": "ΓΚΑΤΖΙΟΥ  ΣΟΦΙΑ",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                "perioxi": "ΑΧΑΡΝΑΙ",
                "tilefono": "2102403004"
            },
            {
                "dieuthinsi": "ΠΑΠΑΓΟΥ 28",
                "farmakeio": "ΜΑΔΟΥΡΟΣ  ΑΝΤΩΝΙΟΣ",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                "perioxi": "ΒΟΥΛΑ",
                "tilefono": "2108954151"
            },
            {
                "dieuthinsi": "ΑΝΑΛΗΨΕΩΣ 4-ΓΡΑΜΜΟΥ",
                "farmakeio": "ΣΥΝΟΔΙΝΟΥ  ΜΑΡΙΑ ΚΑΙ ΣΙΑ Ε.Ε.",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                "perioxi": "ΒΡΙΛΗΣΣΙΑ",
                "tilefono": "2106812100"
            },
            {
                "dieuthinsi": "ΑΓ.ΣΟΦΙΑΣ 99",
                "farmakeio": "ΓΕΝΗΤΣΑΡΕΛΗΣ ΣΑΡΑΝΤΗΣ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                "perioxi": "ΒΥΡΩΝΑΣ",
                "tilefono": "2107628640"
            },
            {
                "dieuthinsi": "ΑΝΑΠΗΡΩΝ ΠΟΛΕΜΟΥ 18",
                "farmakeio": "ΠΑΠΑΟΡΦΑΝΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΒΥΡΩΝΑΣ",
                "tilefono": "2111845939"
            },
            {
                "dieuthinsi": "Λ. ΒΕΙΚΟΥ 46",
                "farmakeio": "ΒΑΕΝΑ ΑΠΟΣΤΟΛΙΑ (ΦΑΡΜΑΚΕΙΟ LIFE PHARMACY Ε.Ε. )",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΓΑΛΑΤΣΙ",
                "tilefono": "2102130250"
            },
            {
                "dieuthinsi": "Λ.ΓΑΛΑΤΣΙΟΥ 81",
                "farmakeio": "ΤΣΕΛΕ ΕΛΕΝΗ - ΘΕΟΧΑΡΟΠΟΥΛΟΥ ΕΥΑ Ο.Ε.",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                "perioxi": "ΓΑΛΑΤΣΙ",
                "tilefono": "2102918047"
            },
            {
                "dieuthinsi": "Λ. ΓΕΡΑΚΑ 36",
                "farmakeio": "ΜΑΥΡΟΥΚΛΗΣ ΣΩΤΗΡΙΟΣ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΓΕΡΑΚΑΣ",
                "tilefono": "2111162240"
            },
            {
                "dieuthinsi": "ΒΑΦΕΙΟΧΩΡΙΟΥ 63",
                "farmakeio": "ΚΑΤΣΑΡΑ ΠΟΠΗ-ΝΑΤΑΛΙΑ ΚΑΙ ΣΙΑ Ε.Ε.",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                "perioxi": "ΓΚΥΖΗ",
                "tilefono": "2106410665"
            },
            {
                "dieuthinsi": "ΟΛΥΜΠΙΟΝΙΚΩΝ 49",
                "farmakeio": "ΚΑΡΑΓΙΑΝΝΟΠΟΥΛΟΣ ΙΩΑΝΝΗΣ ΚΑΙ ΣΙΑ Ε.Ε.",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΓΛΥΚΑ ΝΕΡΑ",
                "tilefono": "2106048480"
            },
            {
                "dieuthinsi": "ΑΝΔΡΕΑ ΠΑΠΑΝΔΡΕΟΥ 3",
                "farmakeio": "ΒΑΒΛΑΣ ΙΩΑΝΝΗΣ",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                "perioxi": "ΓΛΥΦΑΔΑ",
                "tilefono": "2108945058"
            },
            {
                "dieuthinsi": "ΑΝΔΡ. ΛΑΖΑΡΑΚΗ  35",
                "farmakeio": "ΤΖΑΡΑΤΖΟΥΡΗ ΜΑΡΙΑ & ΣΙΑ Ο.Ε..",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΓΛΥΦΑΔΑ",
                "tilefono": "2108980903"
            },
            {
                "dieuthinsi": "ΜΙΧΑΛΑΚΟΠΟΥΛΟΥ 212",
                "farmakeio": "ΣΤΑΥΡΙΔΗΣ ΧΡΗΣΤΟΣ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                "perioxi": "ΓΟΥΔΗ",
                "tilefono": "2107474349"
            },
            {
                "dieuthinsi": "ΠΑΓΚΑΛΟΥ 81",
                "farmakeio": "ΜΑΝΓΚΑΝΙ ΤΖΟΥΖΕΠΠΑ ΚΑΙ ΣΙΑ ΟΕ",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ ΗΜΕΡΑΣ",
                "perioxi": "ΕΛΕΥΣΙΝΑ",
                "tilefono": "2105547602"
            },
            {
                "dieuthinsi": "ΚΑΤΕΧΑΚΗ 66",
                "farmakeio": "ΦΛΩΡΟΥ ΠΑΝΑΓΙΩΤΑ - ΜΑΡΙΑ ΚΑΙ ΣΙΑ Ο.Ε.",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                "perioxi": "ΕΛΛΗΝΟΡΩΣΩΝ",
                "tilefono": "2106995854"
            },
            {
                "dieuthinsi": "Χ.ΤΡΙΚΟΥΠΗ 78",
                "farmakeio": "ΚΑΣΟΥΛΗΣ ΣΕΡΑΦΕΙΜ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                "perioxi": "ΕΞΑΡΧΕΙΑ",
                "tilefono": "2103625514"
            },
            {
                "dieuthinsi": "ΜΑΡΙΝΟΥ ΑΝΤΥΠΑ 42",
                "farmakeio": "ΙΩΣΗΦΙΔΗΣ ΝΙΚΟΛΑΟΣ",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                "perioxi": "ΗΛΙΟΥΠΟΛΗ",
                "tilefono": "2109707586"
            },
            {
                "dieuthinsi": "ΑΡΧΙΜΗΔΟΥΣ 64",
                "farmakeio": "ΚΑΚΑΓΙΑΝΝΗ ΕΛΕΥΘΕΡΙΑ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                "perioxi": "ΗΛΙΟΥΠΟΛΗ",
                "tilefono": "2109926518"
            },
            {
                "dieuthinsi": "Λ. ΔΗΜΟΚΡΑΤΙΑΣ 67",
                "farmakeio": "ΜΟΥΡΙΚΗΣ ΑΡΙΣΤΟΜΕΝΗΣ ΚΑΙ ΣΙΑ  Ο.Ε.",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                "perioxi": "ΙΛΙΟΝ",
                "tilefono": "2102310080"
            },
            {
                "dieuthinsi": "ΦΙΛΟΚΤΗΤΟΥ 101",
                "farmakeio": "ΤΖΑΝΑΚΗΣ ΧΡΗΣΤΟΣ Ε.Ε.",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΙΛΙΟΝ",
                "tilefono": "2102631064"
            },
            {
                "dieuthinsi": "ΓΡΗΓ.ΑΥΞΕΝΤΙΟΥ 52",
                "farmakeio": "ΧΙΩΤΗ ΜΑΡΙΑ ΚΑΙ ΣΙΑ Ε.Ε. (ΜΑΡΙΑ ΚΩΝΣΤ. ΧΙΩΤΗ ΚΑΙ ΣΙΑ Ε.Ε.)",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                "perioxi": "ΙΛΙΣΙΑ ΑΝΩ",
                "tilefono": "2107755489"
            },
            {
                "dieuthinsi": "ΛΥΚΟΥΡΓΟΥ 205",
                "farmakeio": "ΚΟΤΡΙΔΗΣ ΕΥΑΓΓΕΛΟΣ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΚΑΛΛΙΘΕΑ",
                "tilefono": "2109561643"
            },
            {
                "dieuthinsi": "ΔΑΒΑΚΗ 22",
                "farmakeio": "ΝΥΧΑΣ ΜΙΧΑΗΛ-ΝΥΧΑΣ ΓΕΩΡΓΙΟΣ ΟΕ",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                "perioxi": "ΚΑΛΛΙΘΕΑ",
                "tilefono": "2109513048"
            },
            {
                "dieuthinsi": "28ΗΣ ΟΚΤΩΒΡΙΟΥ 24",
                "farmakeio": "ΚΙΟΥΣΗΣ ΠΑΝΑΓΙΩΤΗΣ (1)",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΚΑΛΥΒΙΑ ΘΟΡΙΚΟΥ",
                "tilefono": "2299046434"
            },
            {
                "dieuthinsi": "ΙΠΠΟΚΡΑΤΟΥΣ 13",
                "farmakeio": "ΜΑΡΓΩΝΗ ΒΑΣΙΛΙΚΗ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΚΕΡΑΤΕΑ",
                "tilefono": "2299042222"
            },
            {
                "dieuthinsi": "ΒΑΣ.ΚΩΝΣΤΑΝΤΙΝΟΥ 51",
                "farmakeio": "ΚΟΡΩΝΙΑ ΑΛΕΞΙΑ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΚΟΡΩΠΙ",
                "tilefono": "2106626764"
            },
            {
                "dieuthinsi": "ΑΤΤΙΚΗΣ 10",
                "farmakeio": "ΤΣΑΚΟΥΜΗΣ ΓΕΩΡΓΙΟΣ - ΑΥΓΕΡΙΝΟΣ ΘΕΟΔΩΡΟΣ",
                "katastasi": "False",
                "orario": "11 ΒΡΑΔΥ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                "perioxi": "ΚΟΡΩΠΙ",
                "tilefono": "2106021115"
            },
            {
                "dieuthinsi": "ΚΕΦΑΛΛΗΝΙΑΣ 18",
                "farmakeio": "ΚΕΣΤΗ ΜΥΡΣΙΝΗ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                "perioxi": "ΚΥΨΕΛΗ",
                "tilefono": "2108216889"
            },
            {
                "dieuthinsi": "ΓΑΛΑΖΙΑΣ ΑΚΤΗΣ ΚΑΙ ΚΙΡΚΗΣ 1",
                "farmakeio": "ΒΡΟΥΤΣΗ ΑΙΚΑΤΕΡΙΝΗ ΚΑΙ ΣΙΑ Ο.Ε.",
                "katastasi": "False",
                "orario": "11 ΒΡΑΔΥ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                "perioxi": "ΛΑΓΟΝΗΣΙ",
                "tilefono": "2291022699"
            },
            {
                "dieuthinsi": "Ι.ΦΩΚΑ ΚΑΙ ΠΑΝΔΟΣΙΑΣ 2",
                "farmakeio": "ΤΣΩΛΗΣ ΧΑΡΑΛΑΜΠΟΣ",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                "perioxi": "ΛΑΜΠΡΙΝΗ",
                "tilefono": "2102138011"
            },
            {
                "dieuthinsi": "ΣΜ.ΚΑΤΣΑΡΟΥ 12",
                "farmakeio": "ΚΑΠΑΞΗΣ ΑΛΕΞ/ΔΡΟΣ-ΑΝΤΩΝΙΟΣ ΚΛΗΡΟΝΟΜΙΚΟ ΦΑΡΜΑΚΕΙΟ - ΚΑΠΑΞΗ-ΖΙΝΤΑΡΟΥ ΝΤΑΝ.ΦΛΩΡ.ΚΑΙ ΣΙΑ ΟΕ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΛΑΥΡΙΟ",
                "tilefono": "2292025846"
            },
            {
                "dieuthinsi": "Β.ΚΟΡΟΠΟΥΛΗ 15",
                "farmakeio": "ΡΟΥΤΗΣ ΚΩΝΣΤΑΝΤΙΝΟΣ",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ ΗΜΕΡΑΣ",
                "perioxi": "ΜΑΝΔΡΑ",
                "tilefono": "2105551954"
            },
            {
                "dieuthinsi": "ΑΘΗΝΑΣ 3",
                "farmakeio": "ΚΑΤΣΑ ΑΙΚΑΤΕΡΙΝΗ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΜΑΡΑΘΩΝΑΣ",
                "tilefono": "2294067610"
            },
            {
                "dieuthinsi": "Κ. ΠΑΠΑΔΗΜΗΤΡΙΟΥ 15 Α",
                "farmakeio": "ΜΙΧΑΙΡΙΝΑΣ ΓΕΩΡΓΙΟΣ Ε.Ε.",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΜΑΡΚΟΠΟΥΛΟ",
                "tilefono": "2299023171"
            },
            {
                "dieuthinsi": "ΔΕΛΦΩΝ 5-ΔΗΜΗΤΣΑΝΗΣ",
                "farmakeio": "ΑΠΟΣΤΟΛΟΠΟΥΛΟΥ ΕΙΡΗΝΗ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΜΑΡΟΥΣΙ",
                "tilefono": "2106197569"
            },
            {
                "dieuthinsi": "ΠΛΑΤΑΙΩΝ  4",
                "farmakeio": "ΦΙΛΙΠΠΟΥ ΕΛΕΝΗ",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                "perioxi": "ΜΑΡΟΥΣΙ",
                "tilefono": "2108061556"
            },
            {
                "dieuthinsi": "ΒΥΖΑΝΤΙΟΥ 81",
                "farmakeio": "ΣΠΥΡΑΤΟΥ ΑΙΚΑΤΕΡΙΝΗ",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ ΗΜΕΡΑΣ",
                "perioxi": "ΜΕΓΑΡΑ",
                "tilefono": "2296023017"
            },
            {
                "dieuthinsi": "Φ. ΓΚΙΝΟΣΑΤΗ  73",
                "farmakeio": "ΣΑΚΕΛΛΑΡΙΟΥ ΑΝΔΡΟΝΙΚΗ",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                "perioxi": "ΜΕΤΑΜΟΡΦΩΣΗ",
                "tilefono": "2102847174"
            },
            {
                "dieuthinsi": "ΕΛ.ΒΕΝΙΖΕΛΟΥ 117",
                "farmakeio": "ΜΑΚΡΗ ΚΩΝΣΤΑΝΤΙΝΑ",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                "perioxi": "Ν.ΕΡΥΘΡΑΙΑ",
                "tilefono": "2108001290"
            },
            {
                "dieuthinsi": "Μ.ΑΝΤΥΠΑ 88",
                "farmakeio": "ΚΑΜΠΕΡΗ ΑΓΓΕΛΙΚΗ ΚΑΙ ΣΙΑ  Ο.Ε.",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                "perioxi": "Ν.ΗΡΑΚΛΕΙΟ",
                "tilefono": "2102716436"
            },
            {
                "dieuthinsi": "ΕΛ.ΒΕΝΙΖΕΛΟΥ 22",
                "farmakeio": "ΜΟΣΧΟΒΗΣ ΧΑΡΑΛΑΜΠΟΣ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "Ν.ΙΩΝΙΑ",
                "tilefono": "2102759464"
            },
            {
                "dieuthinsi": "ΕΥΣΤΡΑΤΙΟΥ ΠΙΣΣΑ 40 ΚΑΙ ΜΑΝΔΡΟΚΛΕΟΥΣ",
                "farmakeio": "ΒΕΡΓΟΥ ΜΑΡΙΑ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                "perioxi": "Ν.ΚΟΣΜΟΣ",
                "tilefono": "2109223375"
            },
            {
                "dieuthinsi": "ΝΙΚΟΜΗΔΕΙΑΣ 2",
                "farmakeio": "ΜΠΙΝΤΕΛΑ ΑΝΝΑ & ΣΙΑ Ε.Ε.",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "Ν.ΣΜΥΡΝΗ",
                "tilefono": "2110154316"
            },
            {
                "dieuthinsi": "ΚΛΕΙΣΘΕΝΟΥΣ 11",
                "farmakeio": "ΖΑΓΚΟΣ ΙΩΑΝΝΗΣ ( ΖΑΓΚΟΣ ΙΩΑΝ. - ΒΑΙΔΑΚΗ ΕΙΡΗΝΗ Ο.Ε.)",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                "perioxi": "ΟΜΟΝΟΙΑ",
                "tilefono": "2105227837"
            },
            {
                "dieuthinsi": "ΠΑΡΘΕΝΩΝΟΣ 83-85",
                "farmakeio": "ΓΙΩΡΚΑΣ ΔΗΜΗΤΡΙΟΣ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "Π.ΦΑΛΗΡΟ",
                "tilefono": "2109837999"
            },
            {
                "dieuthinsi": "ΠΕΛΟΠΟΣ 1",
                "farmakeio": "ΜΑΙΟΠΟΥΛΟΣ ΜΑΡΙΟΣ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                "perioxi": "Π.ΦΑΛΗΡΟ",
                "tilefono": "2109428455"
            },
            {
                "dieuthinsi": "ΕΡΑΤΟΣΘΕΝΟΥΣ 22",
                "farmakeio": "ΖΑΝΝΑΚΗ ΑΣΗΜΙΝΑ  ΚΑΙ ΣΙΑ Ε.Ε.",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΠΑΓΚΡΑΤΙ",
                "tilefono": "2107519694"
            },
            {
                "dieuthinsi": "Λ. ΛΑΥΡΙΟΥ 148  A",
                "farmakeio": "ΘΑΝΑΣΟΥΡΑΣ ΓΕΩΡΓΙΟΣ - ΜΑΓΙΑΦΑ ΟΥΡΑΝΙΑ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΠΑΙΑΝΙΑ",
                "tilefono": "2106028008"
            },
            {
                "dieuthinsi": "Λ. ΜΑΡΑΘΩΝΟΣ 62",
                "farmakeio": "ΘΑΝΑΣΟΥΡΑΣ ΓΕΩΡΓΙΟΣ (2) - ΦΟΥΣΕΚΗΣ ΚΩΝΣΤΑΝΤΙΝΟΣ",
                "katastasi": "False",
                "orario": "11 ΒΡΑΔΥ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                "perioxi": "ΠΑΛΛΗΝΗ",
                "tilefono": "2106030319"
            },
            {
                "dieuthinsi": "ΛΕΟΝΤΑΡΙΟΥ 36",
                "farmakeio": "ΜΩΡΑΙΤΟΥ ΠΑΡΑΣΚΕΥΗ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΠΑΛΛΗΝΗ",
                "tilefono": "2106032677"
            },
            {
                "dieuthinsi": "ΚΡΙΤΟΒΟΥΛΙΔΟΥ 18",
                "farmakeio": "ΠΟΛΛΑΛΗ ΠΑΝΑΓΙΩΤΑ-ΚΑΡΑΜΗΤΣΟΣ ΔΗΜΗΤΡΙΟΣ Ο.Ε.",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                "perioxi": "ΠΑΤΗΣΙΑ ΚΑΤΩ",
                "tilefono": "2108322196"
            },
            {
                "dieuthinsi": "ΑΓ.ΛΑΥΡΑΣ 92",
                "farmakeio": "ΕΛΕΥΘΕΡΙΑΔΗΣ ΕΛΕΥΘΕΡΙΟΣ (1)",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                "perioxi": "ΠΑΤΗΣΙΑ ΤΕΡΜΑ",
                "tilefono": "2102285223"
            },
            {
                "dieuthinsi": "ΝΑΟΥΣΗΣ 108   ΧΡΥΣΟΥΠΟΛΗ",
                "farmakeio": "ΜΠΟΥΣΜΠΟΥΛΑΣ ΗΛΙΑΣ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΠΕΡΙΣΤΕΡΙ",
                "tilefono": "2105734264"
            },
            {
                "dieuthinsi": "ΣΑΡΑΝΤΑΠΟΡΟΥ 59",
                "farmakeio": "ΡΑΣΣΙΑ ΙΩΑΝΝΑ ΚΑΙ ΣΙΑ Ο.Ε.",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                "perioxi": "ΠΕΡΙΣΤΕΡΙ",
                "tilefono": "2105716140"
            },
            {
                "dieuthinsi": "ΤΡΙΩΝ ΙΕΡΑΡΧΩΝ 85",
                "farmakeio": "ΣΙΔΗΡΟΠΟΥΛΟΥ ΜΑΛΑΜΑ ΚΑΙ ΣΙΑ Ο.Ε.",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΠΕΤΡΑΛΩΝΑ ΑΝΩ",
                "tilefono": "2103470059"
            },
            {
                "dieuthinsi": "ΠΑΝΔΩΡΟΥ  58",
                "farmakeio": "ΚΟΥΚΕΛΛΗ ΑΘΗΝΑ ΚΑΙ ΣΙΑ Ο.Ε.",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                "perioxi": "ΠΕΤΡΑΛΩΝΑ ΚΑΤΩ",
                "tilefono": "2103427664"
            },
            {
                "dieuthinsi": "ΚΟΛΟΚΟΤΡΩΝΗ 74",
                "farmakeio": "ΚΟΛΕΛΗΣ ΑΛΕΞΑΝΔΡΟΣ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                "perioxi": "ΠΕΤΡΟΥΠΟΛΗ",
                "tilefono": "2105010021"
            },
            {
                "dieuthinsi": "ΣΟΥΛΙΟΥ 148",
                "farmakeio": "ΠΑΠΑΝΑΣΤΑΣΙΟΥ ΑΘΗΝΑ",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                "perioxi": "ΠΕΤΡΟΥΠΟΛΗ",
                "tilefono": "2105017707"
            },
            {
                "dieuthinsi": "ΠΑΤΗΣΙΩΝ 185",
                "farmakeio": "ΚΑΡΑΣΤΑΤΗΡΑ ΕΥΓΕΝΙΑ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΠΛ.ΑΜΕΡΙΚΗΣ",
                "tilefono": "2108673354"
            },
            {
                "dieuthinsi": "ΑΡΙΣΤΟΜΕΝΟΥΣ 94",
                "farmakeio": "ΚΟΝΤΑΚΤΣΗΣ ΠΑΝΑΓΙΩΤΗΣ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                "perioxi": "ΠΛ.ΑΤΤΙΚΗΣ",
                "tilefono": "2108652103"
            },
            {
                "dieuthinsi": "ΙΟΥΛΙΑΝΟΥ 41-43",
                "farmakeio": "ΜΠΑΣΕΑ ΧΡΥΣΟΥΛΑ",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                "perioxi": "ΠΛ.ΒΙΚΤΩΡΙΑΣ",
                "tilefono": "2108221096"
            },
            {
                "dieuthinsi": "Λ.ΠΟΡΤΟ ΡΑΦΤΗ 39",
                "farmakeio": "ΤΑΛΙΑΔΩΡΟΣ ΘΕΟΔΟΣΙΟΣ Ο.Ε.",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΠΟΡΤΟ ΡΑΦΤΗ",
                "tilefono": "2299076035"
            },
            {
                "dieuthinsi": "ΛΕΩΦ. ΑΜΑΛΙΑΣ ΦΛΕΜΙΝΓΚ  1",
                "farmakeio": "ΜΠΙΡΗΣ ΑΝΤΩΝΙΟΣ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΡΑΦΗΝΑ",
                "tilefono": "2294025537"
            },
            {
                "dieuthinsi": "ΔΗΜΑΡΧΟΥ ΧΡ. ΜΠΕΚΑ  98",
                "farmakeio": "ΣΚΟΡΔΙΑΛΟΥ ΠΕΛΑΓΙΑ (OLIBIA PHARMACY E.E.)",
                "katastasi": "False",
                "orario": "11 ΒΡΑΔΥ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                "perioxi": "ΣΠΑΤΑ",
                "tilefono": "2106635135"
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
                "dieuthinsi": "ΛΕΩΦ.ΩΡΩΠΟΥ-ΣΥΚΑΜΙΝΟΥ 125",
                "farmakeio": "ΠΟΛΙΤΗΣ ΕΥΑΓΓΕΛΟΣ",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ ΗΜΕΡΑΣ",
                "perioxi": "ΣΥΚΑΜΙΝΟ",
                "tilefono": "2295071660"
            },
            {
                "dieuthinsi": "Γ. ΓΕΝΝΗΜΑΤΑ 159",
                "farmakeio": "ΚΟΤΥΛΑΙΟΥ ΘΕΟΔΩΡΑ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΤΕΡΨΙΘΕΑ",
                "tilefono": "2109626469"
            },
            {
                "dieuthinsi": "ΘΕΡΜΟΠΥΛΩΝ 105",
                "farmakeio": "ΣΕΛΕΚΟΥ ΧΡΥΣΑΝΘΗ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                "perioxi": "ΧΑΙΔΑΡΙ",
                "tilefono": "2105314802"
            },
            {
                "dieuthinsi": "ΕΘΝ.ΑΝΤΙΣΤΑΣΕΩΣ 65",
                "farmakeio": "ΒΛΑΧΛΗ ΙΟΥΛΙΑ",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                "perioxi": "ΧΑΛΑΝΔΡΙ",
                "tilefono": "2106710936"
            },
            {
                "dieuthinsi": "ΦΙΛ.ΛΙΤΣΑ 17",
                "farmakeio": "ΓΑΛΑΝΗ ΚΥΡΙΑΚΗ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                "perioxi": "ΧΑΛΑΝΔΡΙ",
                "tilefono": "2106801560"
            },
            {
                "dieuthinsi": "ΜΕΣΣΗΝΙΑΣ 31-ΤΥΜΦΡΗΣΤΟΥ",
                "farmakeio": "ΣΑΡΤΖΕΤΑΚΗ ΑΝΑΣΤΑΣΙΑ",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΧΑΛΑΝΔΡΙ",
                "tilefono": "2106840430"
            },
            {
                "dieuthinsi": "ΠΑΠΑΝΙΚΟΛΗ 40",
                "farmakeio": "ΨΑΘΑΣ ΝΙΚΟΛΑΟΣ ΚΑΙ ΣΙΑ Ε.Ε.",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 11 ΒΡΑΔΥ",
                "perioxi": "ΧΑΛΑΝΔΡΙ",
                "tilefono": "2106815190"
            },
            {
                "dieuthinsi": "ΑΕΤΙΔΕΩΝ 6-8",
                "farmakeio": "ΒΕΛΕΤΑΚΟΥ ΚΑΛΛΙΡΡΟΗ - ΜΑΧΑΙΡΑΣ ΙΩΑΝΝΗΣ Ο.Ε.",
                "katastasi": "False",
                "orario": "8 ΠΡΩΙ - 9 ΒΡΑΔΥ",
                "perioxi": "ΧΟΛΑΡΓΟΣ",
                "tilefono": "2106529568"
            },
            {
                "dieuthinsi": "ΧΡΥΣ.ΣΜΥΡΝΗΣ 17",
                "farmakeio": "ΓΚΟΝΗ ΒΑΣΙΛΙΚΗ",
                "katastasi": "True",
                "orario": "8 ΠΡΩΙ - 2 ΜΕΣΗΜΕΡΙ & 5 ΑΠΟΓΕΥΜΑ - 8 ΠΡΩΙ ΕΠΟΜΕΝΗΣ",
                "perioxi": "ΧΟΛΑΡΓΟΣ",
                "tilefono": "2106515944"
            }
        ]
    }

    return (
        <View style={styles.container}>
            <StatusBar style="dark"/>
            <ScrollView style={styles.main}>
                {data.map((pharmacy, index) => (
                    <View style={styles.item}>
                        <View style={styles.item_head}>
                            <Text style={styles.item_head_text}>{pharmacy.perioxi}</Text>
                        </View>
                        <View style={styles.item_row}>
                            <Ionicons name={'add'} size={18} />
                            <Text style={styles.item_text}>{pharmacy.farmakeio}</Text>
                        </View>
                        <View style={styles.item_row}>
                            <Ionicons name={'map'} size={18} />
                            <Text style={styles.item_text}>{pharmacy.dieuthinsi}</Text>
                        </View>
                        <View style={styles.item_row}>
                            <Ionicons name={'time'} size={18} />
                            <Text style={styles.item_text}>{pharmacy.orario}</Text>
                        </View>
                        <View style={styles.item_row}>
                            <Ionicons name={'call'} size={18} />
                            <Text style={styles.item_text}>{pharmacy.tilefono}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAE4E2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    main:{
        marginTop: 50
    },
    item:{
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'black',
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 10,
        marginHorizontal: 14,
        width: '90%'
    },
    item_row:{
        flexDirection: 'row',
        paddingVertical: 4,
    },
    item_head:{
        borderBottomWidth: 1
    },
    item_head_text:{
        textAlign: 'center',
        fontWeight: 'bold'
    },
    item_text:{
        paddingLeft: 5,
    }
});
