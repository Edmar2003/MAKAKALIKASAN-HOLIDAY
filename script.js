// Data for the website
const websiteData = {
    startDate: new Date('2025-04-15'),
    classmates: {
        boys: [
            "BELICARIO", "CUNTAPAY", "DE GUZMAN", "GAGATAM", "LAREDA", 
            "NAGA", "NAKILA", "PICARDAL", "SALVE", "SENARILLOS", 
            "SEVILLA", "SIERVO", "TAGABI", "TAMAYOSA", "VILLARIN"
        ],
        girls: [
            "AKMAD", "ARRIESGADO", "BALUYOT", "CARANTO", "DAPAT", 
            "DE ASA", "DEL ROSARIO", "FRANCISCO", "GARIANDO", "HERMO", 
            "JUNIO", "LAMBANA", "LASQUITE", "MALLARI", "MARCIANO", 
            "MIMBALA", "NAVARRO", "OCAMPO", "OMANDAM", "PARICA", 
            "PEROL", "SALEM", "SEKAK", "URSAL", "ZARAGA"
        ],
        teachers: [
            "Sir. Flor (our adviser)",
            "Sir. Niel",
            "Sir. Makaraig",
            "Sir. Torres",
            "Ma'am. Araneta",
            "Ma'am. Ravis",
            "Ma'am. Viana",
            "Sir. Vincent",
            "Ma'am. Rochelle",
            "Ma'am. Ramos",
            "Sir. Erik"
        ]
    },
    galleryImages: [
        // Grade 11
        { src: "AdditionalM5/29.jpg", category: "Grade 11", title: "Grade 11", description: "First year of journey" },
        { src: "AdditionalM5/30.jpg", category: "Grade 11", title: "Grade 11", description: "First year of journey" },
        { src: "AdditionalM5/28.jpg", category: "Grade 11", title: "Grade 11", description: "Memories from Grade 11" },
        { src: "AdditionalM5/31.jpg", category: "Grade 11", title: "Grade 11", description: "Class moments" },
        { src: "AdditionalM5/5.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 memories" },
        { src: "Additional-Memory/73.jpeg", category: "Grade 11", title: "Grade 11", description: "Special moments" },
        { src: "AdditionalM6/20.jpg", category: "Grade 11", title: "Grade 11", description: "Class activities" },
        { src: "AdditionalM6/19.jpg", category: "Grade 11", title: "Grade 11", description: "Learning together" },
        { src: "AdditionalM6/16.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 days" },
        { src: "AdditionalM6/18.jpg", category: "Grade 11", title: "Grade 11", description: "Class bonding" },
        { src: "AdditionalM6/17.jpg", category: "Grade 11", title: "Grade 11", description: "Memorable times" },
        { src: "AdditionalFile1/116.jpg", category: "Grade 11", title: "Grade 11", description: "First year memories" },
        { src: "AdditionalFile1/112.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 moments" },
        { src: "AdditionalFile1/110.jpg", category: "Grade 11", title: "Grade 11", description: "Class of Grade 11" },
        { src: "AdditionalFile1/109.jpg", category: "Grade 11", title: "Grade 11", description: "Beginning of journey" },
        { src: "AdditionalM2/03.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 days" },
        { src: "AdditionalM2/04.jpg", category: "Grade 11", title: "Grade 11", description: "Learning experiences" },
        { src: "AdditionalM2/09.jpg", category: "Grade 11", title: "Grade 11", description: "Class memories" },
        { src: "AdditionalM2/11.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 specials" },
        { src: "AdditionalM2/13.jpg", category: "Grade 11", title: "Grade 11", description: "First year adventures" },
        { src: "AdditionalM2/16.jpg", category: "Grade 11", title: "Grade 11", description: "Class of Grade 11" },
        { src: "AdditionalM2/17.jpg", category: "Grade 11", title: "Grade 11", description: "Memorable Grade 11" },
        { src: "AdditionalM2/18.jpg", category: "Grade 11", title: "Grade 11", description: "Beginning years" },
        { src: "AdditionalM2/26.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 times" },
        { src: "AdditionalM2/27.jpg", category: "Grade 11", title: "Grade 11", description: "Learning journey begins" },
        { src: "AdditionalM3/106.jpg", category: "Grade 11", title: "Grade 11", description: "Class activities" },
        { src: "AdditionalM3/108.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 moments" },
        { src: "AdditionalM6/14.jpg", category: "Grade 11", title: "Grade 11", description: "Special memories" },
        { src: "AdditionalM6/15.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 class" },
        { src: "AdditionalM4/79.jpg", category: "Grade 11", title: "Grade 11", description: "First year fun" },
        { src: "AdditionalM4/80.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 adventures" },
        { src: "AdditionalM4/81.jpg", category: "Grade 11", title: "Grade 11", description: "Class bonding" },
        { src: "AdditionalM4/83.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 memories" },
        { src: "AdditionalM4/84.jpg", category: "Grade 11", title: "Grade 11", description: "Learning together" },
        { src: "AdditionalM4/85.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 days" },
        { src: "AdditionalM4/86.jpg", category: "Grade 11", title: "Grade 11", description: "Special moments" },
        { src: "AdditionalM4/87.jpg", category: "Grade 11", title: "Grade 11", description: "Class of Grade 11" },
        { src: "AdditionalM4/88.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 experiences" },
        { src: "AdditionalM4/90.jpg", category: "Grade 11", title: "Grade 11", description: "Memorable times" },
        { src: "AdditionalM4.1/100.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 class" },
        { src: "AdditionalM4.1/106.jpg", category: "Grade 11", title: "Grade 11", description: "First year journey" },
        { src: "AdditionalM4.1/107.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 memories" },
        { src: "AdditionalM4.1/108.jpg", category: "Grade 11", title: "Grade 11", description: "Class activities" },
        { src: "AdditionalM4.1/109.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 specials" },
        { src: "AdditionalM4.1/110.jpg", category: "Grade 11", title: "Grade 11", description: "Learning experiences" },
        { src: "AdditionalM4.1/111.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 days" },
        { src: "AdditionalM4.1/113.jpg", category: "Grade 11", title: "Grade 11", description: "Class memories" },
        { src: "AdditionalM4.1/115.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 adventures" },
        { src: "AdditionalM4.1/116.jpg", category: "Grade 11", title: "Grade 11", description: "First year fun" },
        { src: "AdditionalM4.1/117.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 bonding" },
        { src: "AdditionalM4.1/118.jpg", category: "Grade 11", title: "Grade 11", description: "Class of Grade 11" },
        { src: "AdditionalM4.1/119.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 experiences" },
        { src: "AdditionalM4.1/120.jpg", category: "Grade 11", title: "Grade 11", description: "Memorable Grade 11" },
        { src: "AdditionalM5/1.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 times" },
        { src: "AdditionalM5/2.jpg", category: "Grade 11", title: "Grade 11", description: "Class activities" },
        { src: "AdditionalM5/3.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 memories" },
        { src: "AdditionalM5/4.jpg", category: "Grade 11", title: "Grade 11", description: "First year journey" },
        { src: "AdditionalM5/6.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 class" },
        { src: "AdditionalM5/7.jpg", category: "Grade 11", title: "Grade 11", description: "Learning together" },
        { src: "AdditionalM5/8.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 specials" },
        { src: "AdditionalM5/9.jpg", category: "Grade 11", title: "Grade 11", description: "Class memories" },
        { src: "AdditionalM5/10.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 adventures" },
        { src: "AdditionalM5/11.jpg", category: "Grade 11", title: "Grade 11", description: "First year fun" },
        { src: "AdditionalM5/12.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 bonding" },
        { src: "AdditionalM5/17.jpg", category: "Grade 11", title: "Grade 11", description: "Class of Grade 11" },
        { src: "AdditionalM5/18.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 experiences" },
        { src: "AdditionalM5/19.jpg", category: "Grade 11", title: "Grade 11", description: "Memorable Grade 11" },
        { src: "AdditionalM5/20.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 times" },
        { src: "AdditionalM5/21.jpg", category: "Grade 11", title: "Grade 11", description: "Class activities" },
        { src: "AdditionalM5/22.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 memories" },
        { src: "AdditionalM5/23.jpg", category: "Grade 11", title: "Grade 11", description: "First year journey" },
        { src: "AdditionalM5/24.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 class" },
        { src: "AdditionalM5/25.jpg", category: "Grade 11", title: "Grade 11", description: "Learning together" },
        { src: "AdditionalM5/26.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 specials" },
        { src: "AdditionalM5/27.jpg", category: "Grade 11", title: "Grade 11", description: "Class memories" },
        { src: "AdditionalM5/32.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 adventures" },
        { src: "AdditionalM5/33.jpg", category: "Grade 11", title: "Grade 11", description: "First year fun" },
        { src: "AdditionalM5/34.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 bonding" },
        { src: "AdditionalM5/35.jpg", category: "Grade 11", title: "Grade 11", description: "Class of Grade 11" },
        { src: "AdditionalM5/36.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 experiences" },
        { src: "AdditionalM5/45.jpg", category: "Grade 11", title: "Grade 11", description: "Memorable Grade 11" },
        { src: "AdditionalM5/46.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 times" },
        { src: "AdditionalM5/47.jpg", category: "Grade 11", title: "Grade 11", description: "Class activities" },
        { src: "AdditionalM5/48.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 memories" },
        { src: "AdditionalM5/49.jpg", category: "Grade 11", title: "Grade 11", description: "First year journey" },
        { src: "AdditionalM5/50.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 class" },
        { src: "AdditionalM5/51.jpg", category: "Grade 11", title: "Grade 11", description: "Learning together" },
        { src: "AdditionalM5/52.jpg", category: "Grade 11", title: "Grade 11", description: "Grade 11 specials" },
        { src: "AdditionalM5/53.jpg", category: "Grade 11", title: "Grade 11", description: "Class memories" },

        // Teachers Day
        { src: "AdditionalM2/51.jpg", category: "Teachers Day", title: "Teachers Day" },
        { src: "AdditionalM2/52.jpg", category: "Teachers Day", title: "Teachers Day" },
        { src: "AdditionalM2/53.jpg", category: "Teachers Day", title: "Teachers Day" },
        { src: "AdditionalM2/54.jpg", category: "Teachers Day", title: "Teachers Day" },

        { src: "AdditionalM4.1/122.jpg", category: "Teachers Day", title: "Teachers Day" },
        { src: "AdditionalM4.1/121.jpg", category: "Teachers Day", title: "Teachers Day" },

        // Cantata
        { src: "AdditionalFile1/121.gif", category: "Cantata", title: "Cantata" },
        { src: "AdditionalFile1/120.gif", category: "Cantata", title: "Cantata" },
        { src: "AdditionalM4.1/105.jpg", category: "Cantata", title: "Cantata" },
        { src: "AdditionalM6/11.jpg", category: "Cantata", title: "Cantata" },
        { src: "AdditionalM2/40.jpg", category: "Cantata", title: "Cantata" },
        { src: "AdditionalM6/21.jpg", category: "Cantata", title: "Cantata" },
        { src: "AdditionalM2/41.jpg", category: "Cantata", title: "Cantata" },
        { src: "AdditionalM6/22.jpg", category: "Cantata", title: "Cantata" },

        // Year End Party
        { src: "AdditionalM4.1/103.jpg", category: "Year End Party", title: "Year End Party" },
        { src: "AdditionalM5/13.jpg", category: "Year End Party", title: "Year End Party" },
        { src: "AdditionalM4.1/104.jpg", category: "Year End Party", title: "Year End Party" },
        { src: "AdditionalM5/16.jpg", category: "Year End Party", title: "Year End Party" },
        { src: "AdditionalM5/15.jpg", category: "Year End Party", title: "Year End Party" },
        { src: "Album2/Year-End-Party.jpeg", category: "Year End Party", title: "Year End Party" },
        { src: "AdditionalM5/14.jpg", category: "Year End Party", title: "Year End Party" },
        

        // Grade 12
        { src: "AdditionalM4/22.jpg", category: "Grade 12", title: "Grade 12", description: "Final year memories" },
        { src: "AdditionalM7/1.jpg", category: "Grade 12", title: "Grade 12", description: "Senior year moments" },
        { src: "AdditionalM7/2.jpg", category: "Grade 12", title: "Grade 12", description: "Grade 12 class" },
        { src: "AdditionalM7/3.jpg", category: "Grade 12", title: "Grade 12", description: "Final year journey" },
        { src: "AdditionalM7/4.jpg", category: "Grade 12", title: "Grade 12", description: "Senior experiences" },
        { src: "AdditionalM7/5.jpg", category: "Grade 12", title: "Grade 12", description: "Grade 12 memories" },
        { src: "AdditionalM7/6.jpg", category: "Grade 12", title: "Grade 12", description: "Last year together" },
        { src: "AdditionalM7/7.jpg", category: "Grade 12", title: "Grade 12", description: "Senior year fun" },
        { src: "Additional-Memory/76.jpg", category: "Grade 12", title: "Grade 12", description: "Grade 12 specials" },
        { src: "Additional-Memory/77.jpg", category: "Grade 12", title: "Grade 12", description: "Final year adventures" },
        { src: "AdditionalM2/08.jpg", category: "Grade 12", title: "Grade 12", description: "Senior class" },
        { src: "AdditionalM2/24.jpg", category: "Grade 12", title: "Grade 12", description: "Grade 12 days" },
        { src: "AdditionalM6/1.jpg", category: "Grade 12", title: "Grade 12", description: "Last year memories" },
        { src: "AdditionalM4/4.jpg", category: "Grade 12", title: "Grade 12", description: "Senior year activities" },
        { src: "AdditionalM4/5.jpg", category: "Grade 12", title: "Grade 12", description: "Grade 12 moments" },
        { src: "AdditionalM4/8.jpg", category: "Grade 12", title: "Grade 12", description: "Final year learning" },
        { src: "AdditionalM4/9.jpg", category: "Grade 12", title: "Grade 12", description: "Senior experiences" },
        { src: "AdditionalM4/10.jpg", category: "Grade 12", title: "Grade 12", description: "Grade 12 class" },
        { src: "AdditionalM4/16.jpg", category: "Grade 12", title: "Grade 12", description: "Last year together" },
        { src: "AdditionalM4/39.jpg", category: "Grade 12", title: "Grade 12", description: "Senior year fun" },
        { src: "AdditionalM4/40.jpg", category: "Grade 12", title: "Grade 12", description: "Grade 12 specials" },
        { src: "AdditionalM4/41.jpg", category: "Grade 12", title: "Grade 12", description: "Final year adventures" },
        { src: "AdditionalM4/42.jpg", category: "Grade 12", title: "Grade 12", description: "Senior class" },
        { src: "AdditionalM4/43.jpg", category: "Grade 12", title: "Grade 12", description: "Grade 12 days" },
        { src: "AdditionalM4/44.jpg", category: "Grade 12", title: "Grade 12", description: "Last year memories" },
        { src: "AdditionalM4/46.jpg", category: "Grade 12", title: "Grade 12", description: "Senior year activities" },
        { src: "AdditionalM4/47.jpg", category: "Grade 12", title: "Grade 12", description: "Grade 12 moments" },
        { src: "AdditionalM4/48.jpg", category: "Grade 12", title: "Grade 12", description: "Final year learning" },
        { src: "AdditionalM4/49.jpg", category: "Grade 12", title: "Grade 12", description: "Senior experiences" },
        { src: "AdditionalM4/50.jpg", category: "Grade 12", title: "Grade 12", description: "Grade 12 class" },
        { src: "AdditionalM4/51.jpg", category: "Grade 12", title: "Grade 12", description: "Last year together" },
        { src: "AdditionalM4/52.jpg", category: "Grade 12", title: "Grade 12", description: "Senior year fun" },
        { src: "AdditionalM4/53.jpg", category: "Grade 12", title: "Grade 12", description: "Grade 12 specials" },
        { src: "AdditionalM4/54.jpg", category: "Grade 12", title: "Grade 12", description: "Final year adventures" },
        { src: "AdditionalM4/55.jpg", category: "Grade 12", title: "Grade 12", description: "Senior class" },
        { src: "AdditionalM4/56.jpg", category: "Grade 12", title: "Grade 12", description: "Grade 12 days" },
        { src: "AdditionalM4/65.jpg", category: "Grade 12", title: "Grade 12", description: "Last year memories" },
        { src: "AdditionalM4/66.jpg", category: "Grade 12", title: "Grade 12", description: "Senior year activities" },
        { src: "AdditionalM4/67.jpg", category: "Grade 12", title: "Grade 12", description: "Grade 12 moments" },
        { src: "AdditionalM4/68.jpg", category: "Grade 12", title: "Grade 12", description: "Final year learning" },
        { src: "AdditionalM4/69.jpg", category: "Grade 12", title: "Grade 12", description: "Senior experiences" },
        { src: "AdditionalM4/72.jpg", category: "Grade 12", title: "Grade 12", description: "Grade 12 class" },
        { src: "AdditionalM4/73.jpg", category: "Grade 12", title: "Grade 12", description: "Last year together" },
        { src: "AdditionalM4/74.jpg", category: "Grade 12", title: "Grade 12", description: "Senior year fun" },
        { src: "AdditionalM4/75.jpg", category: "Grade 12", title: "Grade 12", description: "Grade 12 specials" },
        { src: "AdditionalM4/76.jpg", category: "Grade 12", title: "Grade 12", description: "Final year adventures" },
        { src: "AdditionalM5/37.jpg", category: "Grade 12", title: "Grade 12", description: "Senior class" },
        { src: "AdditionalM5/38.jpg", category: "Grade 12", title: "Grade 12", description: "Grade 12 days" },
        { src: "Additional-Memory/98.jpg", category: "Grade 12", title: "Other Memories", description: "Special times" },
        { src: "Additional-Memory/97.jpg", category: "Grade 12", title: "Other Memories", description: "Random captures" },
        { src: "Additional-Memory/99.jpg", category: "Grade 12", title: "Other Memories", description: "Various memories" },
        { src: "AdditionalM2/48.jpg", category: "Grade 12", title: "Other Memories", description: "Various captures" },
        { src: "Additional-Memory/84.jpg", category: "Grade 12", title: "Other Memories", description: "Random memories" },


        // MBC
        { src: "Additional-Memory/83.jpg", category: "MBC", title: "MBC", description: "MBC activities" },
        { src: "AdditionalM2/28.jpg", category: "MBC", title: "MBC", description: "MBC moments" },
        { src: "AdditionalM4/18.jpg", category: "MBC", title: "MBC", description: "MBC event" },
        { src: "AdditionalM4/19.jpg", category: "MBC", title: "MBC", description: "MBC celebration" },
        { src: "AdditionalM4/27.jpg", category: "MBC", title: "MBC", description: "MBC activities" },
        { src: "AdditionalM4/28.jpg", category: "MBC", title: "MBC", description: "MBC moments" },
        { src: "AdditionalM4/29.jpg", category: "MBC", title: "MBC", description: "MBC event" },
        { src: "AdditionalM4/30.jpg", category: "MBC", title: "MBC", description: "MBC celebration" },
        { src: "AdditionalM4/33.jpg", category: "MBC", title: "MBC", description: "MBC activities" },
        { src: "AdditionalM4/38.jpg", category: "MBC", title: "MBC", description: "MBC moments" },
        { src: "AdditionalM4/36.jpg", category: "MBC", title: "MBC", description: "MBC event" },
        { src: "AdditionalM4/23.jpg", category: "MBC", title: "MBC", description: "MBC celebration" },
        { src: "AdditionalFile1/122.jpeg", category: "MBC", title: "MBC", description: "MBC activities" },
        { src: "Additional-Memory/78.jpg", category: "MBC", title: "MBC", description: "MBC moments" },
        { src: "Additional-Memory/89.jpg", category: "MBC", title: "MBC", description: "MBC event" },
        { src: "Additional-Memory/79.jpg", category: "MBC", title: "MBC", description: "MBC celebration" },
        { src: "Additional-Memory/81.jpg", category: "MBC", title: "MBC", description: "MBC activities" },
        { src: "Additional-Memory/82.jpg", category: "MBC", title: "MBC", description: "MBC moments" },
        { src: "Additional-Memory/92.jpeg", category: "MBC", title: "MBC", description: "MBC event" },
        { src: "AdditionalM2/21.jpg", category: "MBC", title: "MBC", description: "MBC celebration" },
        { src: "AdditionalM2/31.jpg", category: "MBC", title: "MBC", description: "MBC activities" },
        { src: "AdditionalM2/32.jpg", category: "MBC", title: "MBC", description: "MBC moments" },
        { src: "AdditionalM2/33.jpg", category: "MBC", title: "MBC", description: "MBC event" },
        { src: "AdditionalM2/39.jpg", category: "MBC", title: "MBC", description: "MBC celebration" },
        { src: "AdditionalM4/6.jpg", category: "MBC", title: "MBC", description: "MBC activities" },
        { src: "AdditionalM4/7.jpg", category: "MBC", title: "MBC", description: "MBC moments" },
        { src: "AdditionalM4/17.jpg", category: "MBC", title: "MBC", description: "MBC event" },
        { src: "AdditionalM4/20.jpg", category: "MBC", title: "MBC", description: "MBC celebration" },
        { src: "AdditionalM4/21.jpg", category: "MBC", title: "MBC", description: "MBC activities" },
        { src: "AdditionalM4/25.jpg", category: "MBC", title: "MBC", description: "MBC moments" },
        { src: "AdditionalM4/26.jpg", category: "MBC", title: "MBC", description: "MBC event" },
        { src: "AdditionalM4/32.jpg", category: "MBC", title: "MBC", description: "MBC celebration" },
        { src: "AdditionalM4/34.jpg", category: "MBC", title: "MBC", description: "MBC activities" },
        { src: "AdditionalM4/35.jpg", category: "MBC", title: "MBC", description: "MBC moments" },

        // Rehearsal
        { src: "Additional-Memory/63.jpeg", category: "Rehearsal", title: "Rehearsal" },
        { src: "Additional-Memory/71.jpeg", category: "Rehearsal", title: "Rehearsal" },
        { src: "Additional-Memory/64.jpeg", category: "Rehearsal", title: "Rehearsal" },

        { src: "Additional-Memory/96.jpg", category: "Rehearsal", title: "Other Memories" },
        { src: "AdditionalM6/6.jpg", category: "Rehearsal", title: "Rehearsal" },
        { src: "AdditionalM6/7.jpg", category: "Rehearsal", title: "Rehearsal" },
        { src: "AdditionalM6/8.jpg", category: "Rehearsal", title: "Rehearsal" },
        { src: "AdditionalM6/9.jpg", category: "Rehearsal", title: "Rehearsal" },
        { src: "AdditionalM6/13.jpg", category: "Rehearsal", title: "Rehearsal" },

        // Intercultural
        { src: "AdditionalM4/61.jpg", category: "Intercultural", title: "Intercultural", description: "Cultural exchange" },
        { src: "AdditionalM4/62.jpg", category: "Intercultural", title: "Intercultural", description: "Intercultural event" },
        { src: "AdditionalM6/5.jpg", category: "Intercultural", title: "Intercultural", description: "Cultural celebration" },
        { src: "AdditionalM4/58.jpg", category: "Intercultural", title: "Intercultural", description: "Intercultural activities" },
        { src: "AdditionalM4/59.jpg", category: "Intercultural", title: "Intercultural", description: "Cultural moments" },
        { src: "AdditionalM4/60.jpg", category: "Intercultural", title: "Intercultural", description: "Intercultural event" },
        { src: "AdditionalM4/63.jpg", category: "Intercultural", title: "Intercultural", description: "Cultural exchange" },
        { src: "AdditionalM4/57.jpg", category: "Intercultural", title: "Intercultural", description: "Intercultural celebration" },
        { src: "Additional-Memory/74.jpg", category: "Intercultural", title: "Intercultural" },
        { src: "AdditionalM5/40.jpg", category: "Intercultural", title: "Intercultural", description: "Cultural activities" },
        { src: "AdditionalM5/41.jpg", category: "Intercultural", title: "Intercultural", description: "Intercultural moments" },
        { src: "AdditionalM5/42.jpg", category: "Intercultural", title: "Intercultural", description: "Cultural event" },
        { src: "AdditionalM5/43.jpg", category: "Intercultural", title: "Intercultural", description: "Intercultural exchange" },
        { src: "AdditionalM5/44.jpg", category: "Intercultural", title: "Intercultural", description: "Cultural celebration" },
        { src: "AdditionalM5/39.jpg", category: "Intercultural", title: "Intercultural", description: "Intercultural activities" },

        // Graduation
        { src: "Album/GraduationClassPic.jpg", category: "Graduation", title: "Graduation", description: "Graduation day" },
        { src: "Additional-Memory/95.jpg", category: "Graduation", title: "Graduation", description: "Graduation day" },
        { src: "Additional-Memory/72.jpeg", category: "Graduation", title: "Graduation", description: "Graduation ceremony" },
        { src: "AdditionalM4/13.jpg", category: "Graduation", title: "Graduation", description: "Graduation memories" },
        { src: "AdditionalM4/14.jpg", category: "Graduation", title: "Graduation", description: "Graduation celebration" },
        { src: "AdditionalM8/IMG_20250416_005345.jpg", category: "Graduation", title: "Graduation", description: "Graduation day" },
        { src: "AdditionalM4/12.jpg", category: "Graduation", title: "Graduation", description: "Graduation ceremony" },
        { src: "AdditionalM4/11.jpg", category: "Graduation", title: "Graduation", description: "Graduation memories" },
        { src: "AdditionalM3/104.jpg", category: "Graduation", title: "Graduation", description: "Graduation celebration" },
        { src: "AdditionalM4/15.jpg", category: "Graduation", title: "Graduation", description: "Graduation day" },

        // Others
        { src: "AdditionalM4/2.jpg", category: "Others", title: "Other Memories" },
        { src: "AdditionalM4/3.jpg", category: "Others", title: "Other Memories" },
        { src: "AdditionalFile1/119.jpeg", category: "Others", title: "Other Memories", description: "Random moments" },
        { src: "AdditionalFile1/117.jpeg", category: "Others", title: "Other Memories", description: "Special captures" },
        { src: "AdditionalFile1/115.jpg", category: "Others", title: "Other Memories", description: "Memorable times" },
        { src: "AdditionalFile1/114.jpg", category: "Others", title: "Other Memories", description: "Various activities" },
        { src: "Additional-Memory/85.jpg", category: "Others", title: "Other Memories", description: "Special moments" },
        { src: "Additional-Memory/86.jpg", category: "Others", title: "Other Memories", description: "Various captures" },
        { src: "Additional-Memory/87.jpg", category: "Others", title: "Other Memories", description: "Memorable times" },
        { src: "Additional-Memory/88.jpg", category: "Others", title: "Other Memories", description: "Random activities" },
        { src: "Additional-Memory/93.jpeg", category: "Others", title: "Other Memories", description: "Special memories" },
        { src: "AdditionalM2/02.jpg", category: "Others", title: "Other Memories", description: "Random moments" },
        { src: "AdditionalM2/06.jpg", category: "Others", title: "Other Memories", description: "Special captures" },
        { src: "AdditionalM2/22.jpg", category: "Others", title: "Other Memories", description: "Memorable times" },
        { src: "AdditionalM2/23.jpg", category: "Others", title: "Other Memories", description: "Various activities" },
        { src: "AdditionalM2/25.jpg", category: "Others", title: "Other Memories", description: "Random memories" },
        { src: "AdditionalM2/34.jpg", category: "Others", title: "Other Memories", description: "Special moments" },
        { src: "AdditionalM3/105.jpg", category: "Others", title: "Other Memories", description: "Special memories" },
        { src: "AdditionalM6/2.jpg", category: "Others", title: "Other Memories", description: "Various moments" },
        { src: "AdditionalM6/3.jpg", category: "Others", title: "Other Memories", description: "Random captures" },
        { src: "AdditionalM6/4.jpg", category: "Others", title: "Other Memories", description: "Special times" },
        { src: "AdditionalM6/10.jpg", category: "Others", title: "Other Memories", description: "Various memories" },
        { src: "AdditionalM4/64.jpg", category: "Others", title: "Other Memories", description: "Random moments" },
        { src: "AdditionalM4/70.jpg", category: "Others", title: "Other Memories", description: "Special captures" },
        { src: "AdditionalM4/71.jpg", category: "Others", title: "Other Memories", description: "Memorable times" },
        { src: "AdditionalM4/77.jpg", category: "Others", title: "Other Memories", description: "Various activities" },
        { src: "AdditionalM4/78.jpg", category: "Others", title: "Other Memories", description: "Random memories" },
        { src: "AdditionalM4/82.jpg", category: "Others", title: "Other Memories", description: "Special moments" },
        { src: "AdditionalM4/91.jpg", category: "Others", title: "Other Memories", description: "Various captures" },
        { src: "AdditionalM4/92.jpg", category: "Others", title: "Other Memories", description: "Memorable times" },
        { src: "AdditionalM4/93.jpg", category: "Others", title: "Other Memories", description: "Random activities" },
        { src: "AdditionalM4/94.jpg", category: "Others", title: "Other Memories", description: "Special memories" },
        { src: "AdditionalM4/95.jpg", category: "Others", title: "Other Memories", description: "Various moments" },
        { src: "AdditionalM4/96.jpg", category: "Others", title: "Other Memories", description: "Random captures" },
        { src: "AdditionalM4/97.jpg", category: "Others", title: "Other Memories", description: "Special times" },
        { src: "AdditionalM4/98.jpg", category: "Others", title: "Other Memories", description: "Various memories" },
        { src: "AdditionalM4/99.jpg", category: "Others", title: "Other Memories", description: "Random moments" },
        { src: "AdditionalM4.1/102.jpg", category: "Others", title: "Other Memories", description: "Special captures" },
        { src: "AdditionalM4.1/112.jpg", category: "Others", title: "Other Memories", description: "Memorable times" }
    ],
    lanternImages: [
        { src: "AdditionalM5/30.jpg", title: "First Journey", description: "The Beningging of our amazing Journey" },
        { src: "AdditionalM4/24.jpg", title: "Last Journey", description: "The End of our amazing Journeyr" }

    ],
    winterWishes: [
        { message: "May your winter be filled with warmth and joy!", author: "Class of MAKAKALIKASAN" },
        { message: "Wishing you peace and happiness this winter season.", author: "Your Classmates" },
        { message: "May the stars of winter shine brightly upon you.", author: "Winter Wishes" },
        { message: "Sending warm thoughts and cozy wishes your way.", author: "Season's Greetings" },
        { message: "May this winter bring you closer to your dreams.", author: "Class of 2025" },
        { message: "Wishing you a season of learning and growth.", author: "Academic Wishes" },
        { message: "May your winter be as bright as the northern lights.", author: "Seasonal Blessings" },
        { message: "Sending you snowflakes of happiness and joy.", author: "Winter Cheer" }
    ],
    classmateWishes: {
        "BELICARIO": "May your path be illuminated by winter's gentle light.",
        "CUNTAPAY": "Wishing you warmth and success in the coming year.",
        "DE GUZMAN": "May stars guide you through the winter nights.",
        "GAGATAM": "Sending you snowflake blessings and joy.",
        "LAREDA": "May your winter be filled with cozy moments.",
        "NAGA": "Wishing you peace and prosperity this season.",
        "NAKILA": "May the winter winds carry you to new heights.",
        "PICARDAL": "Sending warm wishes and bright thoughts.",
        "SALVE": "May your days be merry and your heart light.",
        "SENARILLOS": "Wishing you a season of growth and learning.",
        "SEVILLA": "May winter's magic fill your days with wonder.",
        "SIERVO": "Sending you stars of hope and dreams.",
        "TAGABI": "May your winter journey be peaceful and joyful.",
        "TAMAYOSA": "Wishing you warmth from our class family.",
        "VILLARIN": "May the season bring you closer to your goals.",
        "AKMAD": "Sending you snowflake kisses and winter hugs.",
        "ARRIESGADO": "May your winter sparkle with happiness.",
        "BALUYOT": "Wishing you a season of beautiful memories.",
        "CARANTO": "May the winter stars guide your way.",
        "DAPAT": "Sending warm thoughts on cold winter days.",
        "DE ASA": "May your winter be filled with light and love.",
        "DEL ROSARIO": "Wishing you peace and quiet reflection.",
        "FRANCISCO": "May the season bring you joy and laughter.",
        "GARIANDO": "Sending you winter blessings and cheer.",
        "HERMO": "May your heart be warm all winter long.",
        "JUNIO": "Wishing you success in all your endeavors.",
        "LAMBANA": "May winter's beauty inspire your soul.",
        "LASQUITE": "Sending you cozy moments and happy times.",
        "MALLARI": "May the season fill you with hope.",
        "MARCIANO": "Wishing you a winter of wonderful discoveries.",
        "MIMBALA": "May your days be bright and your nights peaceful.",
        "NAVARRO": "Sending you winter wisdom and warmth.",
        "OCAMPO": "May the season bring you closer to loved ones.",
        "OMANDAM": "Wishing you a harvest of happy memories.",
        "PARICA": "May winter's chill bring clarity and focus.",
        "PEROL": "Sending you stars to light your winter path.",
        "SALEM": "May your winter be magical and memorable.",
        "SEKAK": "Wishing you strength and perseverance.",
        "URSAL": "May the season renew your spirit and energy.",
        "ZARAGA": "Sending you peace and prosperity always."
    }
};

// State management
const appState = {
    currentUser: null,
    userType: 'student',
    theme: 'winter',
    animationsEnabled: true,
    snowEnabled: true,
    musicEnabled: false,
    nightModeEnabled: false,
    currentLanternIndex: 0,
    currentGalleryFilter: 'all',
    winterViewEnabled: false,
    genderIndicator: 'neutral'
};

// DOM Elements
const elements = {
    // Modals
    welcomeModal: document.getElementById('welcomeModal'),
    lanternModal: document.getElementById('lanternModal'),
    galleryModal: document.getElementById('galleryModal'),
    classmateModal: document.getElementById('classmateModal'),
    
    // Buttons
    submitName: document.getElementById('submitName'),
    enterSite: document.getElementById('enterSite'),
    themeToggle: document.getElementById('themeToggle'),
    animationToggle: document.getElementById('animationToggle'),
    snowToggle: document.getElementById('snowToggle'),
    musicToggle: document.getElementById('musicToggle'),
    printBtn: document.getElementById('printBtn'),
    scrollToTop: document.getElementById('scrollToTop'),
    warmWishesBtn: document.getElementById('warmWishesBtn'),
    winterViewToggle: document.getElementById('winterViewToggle'),
    genderToggle: document.getElementById('genderToggle'),
    menuToggle: document.getElementById('menuToggle'),
    
    // Inputs
    userName: document.getElementById('userName'),
    userTypeBtns: document.querySelectorAll('.user-type-btn'),
    
    // Content Areas
    daysCounter: document.getElementById('daysCounter'),
    snowflakeCounter: document.getElementById('snowflakeCounter'),
    lanternTrack: document.getElementById('lanternTrack'),
    lanternIndicators: document.getElementById('lanternIndicators'),
    boysContainer: document.getElementById('boysContainer'),
    girlsContainer: document.getElementById('girlsContainer'),
    teachersContainer: document.getElementById('teachersContainer'),
    masonryGrid: document.getElementById('masonryGrid'),
    snowContainer: document.getElementById('snowContainer'),
    risingStars: document.getElementById('risingStars'),
    
    // Navigation
    navLinks: document.querySelector('.nav-links'),
    
    // Messages
    welcomeText: document.getElementById('welcomeText'),
    winterMessage: document.getElementById('winterMessage'),
    messageAuthor: document.getElementById('messageAuthor'),
    
    // Modal content
    lanternModalImage: document.getElementById('lanternModalImage'),
    lanternModalTitle: document.getElementById('lanternModalTitle'),
    lanternModalDescription: document.getElementById('lanternModalDescription'),
    galleryModalImage: document.getElementById('galleryModalImage'),
    galleryModalTitle: document.getElementById('galleryModalTitle'),
    galleryModalDescription: document.getElementById('galleryModalDescription'),
    classmateName: document.getElementById('classmateName'),
    winterWishText: document.getElementById('winterWishText'),
    
    // Audio
    backgroundMusic: document.getElementById('backgroundMusic')
};

// Initialize the website
function init() {
    // Set up event listeners
    setupEventListeners();
    
    // Initialize counters and animations
    updateDaysCounter();
    createSnowflakesCounter();
    createRisingStars();
    
    // Load data
    populateLanternCarousel();
    populateClassmateCards();
    populateGallery();
    
    // Check for saved user
    checkSavedUser();
    
    // Initialize background music with a winter melody (public domain)
    elements.backgroundMusic.src = "https://assets.mixkit.co/music/preview/mixkit-driving-ambition-32.mp3";
    
    // Set up scroll to top button
    window.addEventListener('scroll', handleScroll);

    // Set up night mode
    setupNightMode();
    
    // Set up gender indicator
    updateGenderIndicator();
    
    console.log('MAKAKALIKASAN website initialized successfully!');
}

// Event Listeners Setup
function setupEventListeners() {
    // Welcome modal
    elements.submitName.addEventListener('click', handleNameSubmit);
    elements.enterSite.addEventListener('click', enterSite);
    elements.userTypeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            elements.userTypeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            appState.userType = btn.dataset.type;
        });
    });

    // Night mode
    document.getElementById('nightModeToggle').addEventListener('click', toggleNightMode);

    // Full view button for class picture
    document.querySelector('.full-view-btn').addEventListener('click', openFullViewModal);
    
    // Theme toggles
    elements.themeToggle.addEventListener('click', toggleTheme);
    elements.animationToggle.addEventListener('click', toggleAnimations);
    elements.snowToggle.addEventListener('click', toggleSnow);
    elements.musicToggle.addEventListener('click', toggleMusic);
    elements.printBtn.addEventListener('click', togglePrintMode);
    elements.winterViewToggle.addEventListener('click', toggleWinterView);
    elements.genderToggle.addEventListener('click', toggleGender);
    
    // Navigation
    elements.menuToggle.addEventListener('click', toggleMobileMenu);
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                updateActiveNavLink(link);
            }
        });
    });
    
    // Scroll to top
    elements.scrollToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Winter wishes
    elements.warmWishesBtn.addEventListener('click', showRandomWinterWish);
    
    // Gallery filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            appState.currentGalleryFilter = btn.dataset.filter;
            filterGallery();
        });
    });
    
    // Gender tabs
    document.querySelectorAll('.gender-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.gender-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            document.querySelectorAll('.classmates-grid').forEach(grid => {
                grid.classList.remove('active');
            });
            
            const gender = tab.dataset.gender;
            document.querySelector(`.${gender}-grid`).classList.add('active');
        });
    });
    
    // Modal close buttons
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeAllModals();
        }
    });
    
    // Handle Enter key in name input
    elements.userName.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleNameSubmit();
        }
    });
}

// Check for saved user in localStorage
function checkSavedUser() {
    const savedUser = localStorage.getItem('makakalikasanUser');
    const savedType = localStorage.getItem('makakalikasanUserType');
    
    if (savedUser && savedType) {
        appState.currentUser = savedUser;
        appState.userType = savedType;
        
        // Show welcome back message
        showPersonalizedWelcome(savedUser, savedType);
        
        // Hide modal after a delay
        setTimeout(() => {
            elements.welcomeModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 3000);
    }
}

// Handle name submission
function handleNameSubmit() {
    const name = elements.userName.value.trim();
    
    if (!name) {
        showNotification('Please enter your name', 'error');
        return;
    }
    
    appState.currentUser = name;
    
    // Save to localStorage
    localStorage.setItem('makakalikasanUser', name);
    localStorage.setItem('makakalikasanUserType', appState.userType);
    
    // Show personalized welcome
    showPersonalizedWelcome(name, appState.userType);
}

// Show personalized welcome message
function showPersonalizedWelcome(name, type) {
    let welcomeMessage = '';
    let photoClass = '';
    
    switch (type) {
        case 'student':
            welcomeMessage = `Welcome back, ${name}! Your star still shines here.`;
            photoClass = 'student-photo';
            break;
        case 'teacher':
            welcomeMessage = `Welcome, guiding light ${name}!`;
            photoClass = 'teacher-photo';
            break;
        case 'visitor':
            welcomeMessage = `Welcome to our winter memory garden, ${name}!`;
            photoClass = 'visitor-photo';
            break;
    }
    
    elements.welcomeText.textContent = welcomeMessage;
    document.querySelector('.user-photo-placeholder').className = `user-photo-placeholder ${photoClass}`;
    document.getElementById('personalizedWelcome').classList.remove('hidden');
    
    // Trigger star twinkle animation
    const star = document.querySelector('.twinkle-star');
    star.style.animation = 'none';
    setTimeout(() => {
        star.style.animation = 'twinkle 2s infinite';
    }, 10);
}

// Enter the site
function enterSite() {
    elements.welcomeModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Start animations if enabled
    if (appState.animationsEnabled) {
        startAnimations();
    }
    
    // Start snow if enabled
    if (appState.snowEnabled) {
        createSnowfall();
    }
    
    // Start music if enabled
    if (appState.musicEnabled) {
        elements.backgroundMusic.play().catch(e => {
            console.log('Autoplay prevented. User interaction required.');
        });
    }
    
    showNotification('Welcome to MAKAKALIKASAN!', 'success');
}

// Update days counter
function updateDaysCounter() {
    const today = new Date();
    const timeDiff = today.getTime() - websiteData.startDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    
    elements.daysCounter.textContent = daysDiff;
    
    // Update start date display
    document.getElementById('startDate').textContent = websiteData.startDate.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
    });
    
    // Create snowflakes for the counter
    createCounterSnowflakes(daysDiff);
}

// Create snowflakes for days counter
function createCounterSnowflakes(count) {
    elements.snowflakeCounter.innerHTML = '';
    const snowflakeCount = Math.min(count, 50); // Limit to 50 snowflakes
    
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'counter-snowflake';
        snowflake.innerHTML = '❄️';
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
        snowflake.style.opacity = Math.random() * 0.5 + 0.5;
        
        elements.snowflakeCounter.appendChild(snowflake);
    }
}

// Create rising stars animation
function createRisingStars() {
    elements.risingStars.innerHTML = '';
    
    for (let i = 0; i < 15; i++) {
        const star = document.createElement('div');
        star.className = 'rising-star';
        star.innerHTML = '⭐';
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 10}s`;
        star.style.fontSize = `${Math.random() * 12 + 8}px`;
        star.style.opacity = Math.random() * 0.7 + 0.3;
        
        elements.risingStars.appendChild(star);
    }
}

// Populate lantern carousel
function populateLanternCarousel() {
    elements.lanternTrack.innerHTML = '';
    elements.lanternIndicators.innerHTML = '';
    
    websiteData.lanternImages.forEach((image, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = 'lantern-slide';
        slide.dataset.index = index;
        
        const lanternFrame = document.createElement('div');
        lanternFrame.className = 'lantern-frame';
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.title;
        img.className = 'lantern-image';
        
        const caption = document.createElement('div');
        caption.className = 'lantern-caption';
        caption.innerHTML = `<h4>${image.title}</h4><p>${image.description}</p>`;
        
        lanternFrame.appendChild(img);
        lanternFrame.appendChild(caption);
        slide.appendChild(lanternFrame);
        elements.lanternTrack.appendChild(slide);
        
        // Create indicator
        const indicator = document.createElement('div');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.dataset.index = index;
        indicator.addEventListener('click', () => goToLanternSlide(index));
        elements.lanternIndicators.appendChild(indicator);
        
        // Add click event to lantern
        lanternFrame.addEventListener('click', () => openLanternModal(image));
    });
    
    // Add navigation buttons
    document.getElementById('prevLantern').addEventListener('click', () => {
        goToLanternSlide(appState.currentLanternIndex - 1);
    });
    
    document.getElementById('nextLantern').addEventListener('click', () => {
        goToLanternSlide(appState.currentLanternIndex + 1);
    });
    
    // Auto slide
    if (appState.animationsEnabled) {
        startLanternAutoSlide();
    }
}

// Go to specific lantern slide
function goToLanternSlide(index) {
    const slides = document.querySelectorAll('.lantern-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    
    appState.currentLanternIndex = index;
    elements.lanternTrack.style.transform = `translateX(-${index * 100}%)`;
    
    // Update indicators
    indicators.forEach((ind, i) => {
        ind.classList.toggle('active', i === index);
    });
}

// Start auto slide for lanterns
function startLanternAutoSlide() {
    setInterval(() => {
        if (appState.animationsEnabled && document.visibilityState === 'visible') {
            goToLanternSlide(appState.currentLanternIndex + 1);
        }
    }, 5000);
}

// Open lantern modal
function openLanternModal(image) {
    elements.lanternModalImage.src = image.src;
    elements.lanternModalTitle.textContent = image.title;
    elements.lanternModalDescription.textContent = image.description;
    elements.lanternModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Populate classmate cards
function populateClassmateCards() {
    // Boys
    websiteData.classmates.boys.forEach(name => {
        createClassmateCard(name, 'boys', 'student');
    });
    
    // Girls
    websiteData.classmates.girls.forEach(name => {
        createClassmateCard(name, 'girls', 'student');
    });
    
    // Teachers
    websiteData.classmates.teachers.forEach(name => {
        createClassmateCard(name, 'teachers', 'teacher');
    });
}

// Create a classmate card
function createClassmateCard(name, gender, role) {
    const card = document.createElement('div');
    card.className = 'classmate-card';
    card.dataset.name = name.split('(')[0].trim(); // Remove parentheses for data attribute
    
    const photo = document.createElement('div');
    photo.className = 'classmate-photo';
    
    // Create image element instead of icon
    const img = document.createElement('img');
    img.className = 'classmate-image';
    img.alt = name;
    
    // Map names to image paths (same as before)
    const imageMap = {
        // Boys
        "BELICARIO": "Classmate-Picture/Bilecario.jpg",
        "CUNTAPAY": "Classmate-Picture/Cuntapay.jpg",
        "DE GUZMAN": "Classmate-Picture/Deguzman.jpg",
        "GAGATAM": "Classmate-Picture/Gagatam.jpg",
        "LAREDA": "Classmate-Picture/Lareda.jpg",
        "NAGA": "Classmate-Picture/Naga.jpg",
        "NAKILA": "Classmate-Picture/Nakila.jpg",
        "PICARDAL": "Classmate-Picture/Picardal.jpg",
        "SALVE": "Classmate-Picture/Salve.jpg",
        "SENARILLOS": "Classmate-Picture/Joshua.jpg",
        "SEVILLA": "Classmate-Picture/Sivilla.jpg",
        "SIERVO": "Classmate-Picture/Jv.jpg",
        "TAGABI": "Classmate-Picture/Tagabi.jpg",
        "TAMAYOSA": "Classmate-Picture/Tamayosa.jpg",
        "VILLARIN": "Classmate-Picture/Villarin.jpg",
        
        // Girls
        "AKMAD": "Classmate-Picture/Jewell.jpg",
        "ARRIESGADO": "Classmate-Picture/Trisha.jpg",
        "BALUYOT": "Classmate-Picture/Baluyot.jpg",
        "CARANTO": "Classmate-Picture/Caranto.jpg",
        "DAPAT": "Classmate-Picture/Dapat.jpg",
        "DE ASA": "Classmate-Picture/De Asa.jpg",
        "DEL ROSARIO": "Classmate-Picture/Shiela.jpg",
        "FRANCISCO": "Classmate-Picture/Francisco.jpg",
        "GARIANDO": "Classmate-Picture/Gariando.jpg",
        "HERMO": "Classmate-Picture/Hermo.jpg",
        "JUNIO": "Classmate-Picture/Junio.jpg",
        "LAMBANA": "Classmate-Picture/Stephanie.jpg",
        "LASQUITE": "Classmate-Picture/Lasquite.jpg",
        "MALLARI": "Classmate-Picture/Mallari.jpg",
        "MARCIANO": "Classmate-Picture/Cathie.jpg",
        "MIMBALA": "Classmate-Picture/Mimbala.jpg",
        "NAVARRO": "Classmate-Picture/Janin.jpg",
        "OCAMPO": "Classmate-Picture/Ocampo.jpg",
        "OMANDAM": "Classmate-Picture/Omandam.jpg",
        "PARICA": "Classmate-Picture/Charm.jpg",
        "PEROL": "Classmate-Picture/Perol.jpg",
        "SALEM": "Classmate-Picture/Salem.jpg",
        "SEKAK": "Classmate-Picture/Sekak.jpg",
        "URSAL": "Classmate-Picture/Ursal.jpg",
        "ZARAGA": "Classmate-Picture/Zaraga.jpg",
        
        // Teachers - special handling for adviser
        "Sir. Flor (our adviser)": "Classmate-Picture/Adviser/flor.jpg"
    };
    
    // Set image source based on name
    const cleanName = name.split('(')[0].trim().toUpperCase();
    let imagePath = imageMap[name] || imageMap[cleanName];
    
    if (!imagePath && role === 'teacher') {
        // Default teacher icon if specific image not found
        const icon = document.createElement('i');
        icon.className = 'fas fa-chalkboard-teacher';
        photo.appendChild(icon);
    } else if (imagePath) {
        img.src = imagePath;
        // Add error handling for broken images
        img.onerror = function() {
            this.style.display = 'none';
            const icon = document.createElement('i');
            icon.className = gender === 'boys' ? 'fas fa-user' : 
                           gender === 'girls' ? 'fas fa-user-friends' : 'fas fa-chalkboard-teacher';
            photo.appendChild(icon);
        };
        photo.appendChild(img);
    } else {
        // Default icon for students without images
        const icon = document.createElement('i');
        icon.className = gender === 'boys' ? 'fas fa-user' : 'fas fa-user-friends';
        photo.appendChild(icon);
    }
    
    const nameElement = document.createElement('h4');
    nameElement.className = 'classmate-name';
    nameElement.textContent = name;
    
    const roleElement = document.createElement('p');
    roleElement.className = 'classmate-role';
    roleElement.textContent = role === 'teacher' ? 'Teacher' : (gender === 'boys' ? 'Male Student' : 'Female Student');
    
    const snowflakePattern = document.createElement('div');
    snowflakePattern.className = 'snowflake-pattern';
    
    card.appendChild(photo);
    card.appendChild(nameElement);
    card.appendChild(roleElement);
    card.appendChild(snowflakePattern);
    
    // Mobile-friendly tap handling
    let tapCount = 0;
    let tapTimer = null;
    const TAP_DELAY = 300; // ms
    
    // Handle both desktop and mobile
    card.addEventListener('click', (e) => {
        // For mobile/touch devices
        if ('ontouchstart' in window || navigator.maxTouchPoints) {
            tapCount++;
            
            if (tapCount === 1) {
                tapTimer = setTimeout(() => {
                    // Single tap - just hover effect
                    tapCount = 0;
                }, TAP_DELAY);
            } else if (tapCount === 2) {
                clearTimeout(tapTimer);
                // Double tap - open modal
                openClassmateModal(name, role, gender);
                tapCount = 0;
                
                // Prevent default to avoid zoom on iOS
                e.preventDefault();
                e.stopPropagation();
            }
        }
    });
    
    // Keep double-click for desktop
    card.addEventListener('dblclick', (e) => {
        if (!('ontouchstart' in window || navigator.maxTouchPoints)) {
            // Desktop double-click
            openClassmateModal(name, role, gender);
        }
    });
    
    // Add hover effect for desktop
    card.addEventListener('mouseenter', () => {
        if (appState.animationsEnabled && !('ontouchstart' in window || navigator.maxTouchPoints)) {
            card.style.transform = 'translateY(-5px)';
            if (img.complete && img.naturalHeight !== 0) {
                img.style.transform = 'scale(1.05)';
            }
        }
    });
    
    card.addEventListener('mouseleave', () => {
        if (!('ontouchstart' in window || navigator.maxTouchPoints)) {
            card.style.transform = 'translateY(0)';
            if (img.style) {
                img.style.transform = 'scale(1)';
            }
        }
    });
    
    // Add to appropriate container
    if (gender === 'boys') {
        elements.boysContainer.appendChild(card);
    } else if (gender === 'girls') {
        elements.girlsContainer.appendChild(card);
    } else if (gender === 'teachers') {
        elements.teachersContainer.appendChild(card);
    }
}

// Open classmate modal with winter wish
function openClassmateModal(name, role, gender) {
    // Extract just the name without titles
    const cleanName = name.replace(/^(Sir\.|Ma'am\.)\s*/i, '').split('(')[0].trim();
    
    elements.classmateName.textContent = name;
    document.getElementById('classmateRole').textContent = role === 'teacher' ? 'Teacher' : 'Student';
    
    // Get winter wish
    let winterWish = websiteData.classmateWishes[cleanName] || 
                     "May this winter bring you warmth, joy, and beautiful memories.";
    
    elements.winterWishText.textContent = winterWish;
    
    // Update the modal photo with actual image
    const modalPhotoContainer = document.querySelector('.classmate-photo-modal');
    
    // Clear any existing content
    modalPhotoContainer.innerHTML = '';
    
    // Create image for modal
    const img = document.createElement('img');
    img.className = 'classmate-modal-image';
    img.alt = name;
    
    // Same image mapping as before
    const imageMap = {
        // Boys
        "BELICARIO": "Classmate-Picture/Bilecario.jpg",
        "CUNTAPAY": "Classmate-Picture/Cuntapay.jpg",
        "DE GUZMAN": "Classmate-Picture/Deguzman.jpg",
        "GAGATAM": "Classmate-Picture/Gagatam.jpg",
        "LAREDA": "Classmate-Picture/Lareda.jpg",
        "NAGA": "Classmate-Picture/Naga.jpg",
        "NAKILA": "Classmate-Picture/Nakila.jpg",
        "PICARDAL": "Classmate-Picture/Picardal.jpg",
        "SALVE": "Classmate-Picture/Salve.jpg",
        "SENARILLOS": "Classmate-Picture/Joshua.jpg",
        "SEVILLA": "Classmate-Picture/Sivilla.jpg",
        "SIERVO": "Classmate-Picture/Jv.jpg",
        "TAGABI": "Classmate-Picture/Tagabi.jpg",
        "TAMAYOSA": "Classmate-Picture/Tamayosa.jpg",
        "VILLARIN": "Classmate-Picture/Villarin.jpg",
        
        // Girls
        "AKMAD": "Classmate-Picture/Jewell.jpg",
        "ARRIESGADO": "Classmate-Picture/Trisha.jpg",
        "BALUYOT": "Classmate-Picture/Baluyot.jpg",
        "CARANTO": "Classmate-Picture/Caranto.jpg",
        "DAPAT": "Classmate-Picture/Dapat.jpg",
        "DE ASA": "Classmate-Picture/De Asa.jpg",
        "DEL ROSARIO": "Classmate-Picture/Shiela.jpg",
        "FRANCISCO": "Classmate-Picture/Francisco.jpg",
        "GARIANDO": "Classmate-Picture/Gariando.jpg",
        "HERMO": "Classmate-Picture/Hermo.jpg",
        "JUNIO": "Classmate-Picture/Junio.jpg",
        "LAMBANA": "Classmate-Picture/Stephanie.jpg",
        "LASQUITE": "Classmate-Picture/Lasquite.jpg",
        "MALLARI": "Classmate-Picture/Mallari.jpg",
        "MARCIANO": "Classmate-Picture/Cathie.jpg",
        "MIMBALA": "Classmate-Picture/Mimbala.jpg",
        "NAVARRO": "Classmate-Picture/Janin.jpg",
        "OCAMPO": "Classmate-Picture/Ocampo.jpg",
        "OMANDAM": "Classmate-Picture/Omandam.jpg",
        "PARICA": "Classmate-Picture/Charm.jpg",
        "PEROL": "Classmate-Picture/Perol.jpg",
        "SALEM": "Classmate-Picture/Salem.jpg",
        "SEKAK": "Classmate-Picture/Sekak.jpg",
        "URSAL": "Classmate-Picture/Ursal.jpg",
        "ZARAGA": "Classmate-Picture/Zaraga.jpg",
        
        // Teachers
        "Sir. Flor (our adviser)": "Classmate-Picture/Adviser/flor.jpg"
    };
    
    const imagePath = imageMap[name] || imageMap[cleanName.toUpperCase()];
    
    if (imagePath) {
        img.src = imagePath;
        img.onerror = function() {
            // Fallback to icon if image fails to load
            modalPhotoContainer.innerHTML = '';
            const icon = document.createElement('i');
            icon.className = role === 'teacher' ? 'fas fa-chalkboard-teacher' : 'fas fa-user-circle';
            modalPhotoContainer.appendChild(icon);
        };
        modalPhotoContainer.appendChild(img);
        
        // Add snowflake background pattern
        const snowflakeBg = document.createElement('div');
        snowflakeBg.className = 'snowflake-bg-modal';
        modalPhotoContainer.appendChild(snowflakeBg);
    } else {
        // Fallback icon
        const icon = document.createElement('i');
        icon.className = role === 'teacher' ? 'fas fa-chalkboard-teacher' : 'fas fa-user-circle';
        modalPhotoContainer.appendChild(icon);
        
        // Add snowflake background pattern
        const snowflakeBg = document.createElement('div');
        snowflakeBg.className = 'snowflake-bg-modal';
        modalPhotoContainer.appendChild(snowflakeBg);
    }
    
    elements.classmateModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Add a nice entrance animation
    if (appState.animationsEnabled) {
        modalPhotoContainer.style.animation = 'none';
        setTimeout(() => {
            modalPhotoContainer.style.animation = 'fadeIn 0.5s ease, twinkle 2s infinite';
        }, 10);
    }
    
    showNotification(`Winter wish revealed for ${cleanName}!`, 'success');
}

// Open classmate modal with winter wish
function openClassmateModal(name, role, gender) {
    // Extract just the name without titles
    const cleanName = name.replace(/^(Sir\.|Ma'am\.)\s*/i, '').split('(')[0].trim();
    
    elements.classmateName.textContent = name;
    document.getElementById('classmateRole').textContent = role === 'teacher' ? 'Teacher' : 'Student';
    
    // Get winter wish
    let winterWish = websiteData.classmateWishes[cleanName] || 
                     "May this winter bring you warmth, joy, and beautiful memories.";
    
    elements.winterWishText.textContent = winterWish;
    
    elements.classmateModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    showNotification(`Winter wish revealed for ${cleanName}!`, 'success');
}

// Open full view modal for class picture
// Open full view modal for class picture with zoom functionality
function openFullViewModal() {
    // Create modal if it doesn't exist
    if (!document.getElementById('fullViewModal')) {
        const modalHTML = `
            <div id="fullViewModal" class="modal">
                <div class="modal-content full-view-modal" style="max-width: 95%; width: 95%; max-height: 95vh;">
                    <button class="close-modal" id="closeFullViewModal">&times;</button>
                    <div class="modal-image-container" style="position: relative; overflow: auto;">
                        <img src="ChristmasSpecial/IMG20250414230505.jpg" alt="Class Picture" 
                             id="fullViewImage"
                             style="width: 100%; height: auto; cursor: zoom-in; transition: transform 0.25s ease;">
                    </div>
                    <div class="modal-info" style="text-align: center; padding: 1rem; display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                        <h3 style="margin: 0;">MAKAKALIKASAN Class Picture</h3>
                        <div class="zoom-controls" style="display: flex; gap: 0.5rem;">
                            <button class="zoom-btn" id="zoomInBtn" title="Zoom In">
                                <i class="fas fa-search-plus"></i>
                            </button>
                            <button class="zoom-btn" id="zoomOutBtn" title="Zoom Out">
                                <i class="fas fa-search-minus"></i>
                            </button>
                            <button class="zoom-btn" id="resetZoomBtn" title="Reset Zoom">
                                <i class="fas fa-expand-arrows-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Add event listeners
        const modal = document.getElementById('fullViewModal');
        const image = document.getElementById('fullViewImage');
        let scale = 1;
        
        // Close button
        document.getElementById('closeFullViewModal').addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            // Reset zoom when closing
            scale = 1;
            image.style.transform = `scale(${scale})`;
        });
        
        // Close when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target.id === 'fullViewModal') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
                // Reset zoom when closing
                scale = 1;
                image.style.transform = `scale(${scale})`;
            }
        });
        
        // Zoom in/out on click
        image.addEventListener('click', (e) => {
            if (e.ctrlKey || e.metaKey) {
                // Ctrl+Click to zoom out
                scale = Math.max(0.5, scale - 0.5);
            } else {
                // Regular click to zoom in
                scale = scale + 0.5;
            }
            image.style.transform = `scale(${scale})`;
            image.style.cursor = scale > 1 ? 'zoom-out' : 'zoom-in';
        });
        
        // Zoom controls
        document.getElementById('zoomInBtn').addEventListener('click', () => {
            scale = scale + 0.5;
            image.style.transform = `scale(${scale})`;
            image.style.cursor = scale > 1 ? 'zoom-out' : 'zoom-in';
        });
        
        document.getElementById('zoomOutBtn').addEventListener('click', () => {
            scale = Math.max(0.5, scale - 0.5);
            image.style.transform = `scale(${scale})`;
            image.style.cursor = scale > 1 ? 'zoom-out' : 'zoom-in';
        });
        
        document.getElementById('resetZoomBtn').addEventListener('click', () => {
            scale = 1;
            image.style.transform = `scale(${scale})`;
            image.style.cursor = 'zoom-in';
        });
        
        // Mouse wheel zoom
        image.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (e.deltaY < 0) {
                // Scroll up - zoom in
                scale = scale + 0.25;
            } else {
                // Scroll down - zoom out
                scale = Math.max(0.5, scale - 0.25);
            }
            image.style.transform = `scale(${scale})`;
            image.style.cursor = scale > 1 ? 'zoom-out' : 'zoom-in';
        });
    }
    
    // Show the modal
    const modal = document.getElementById('fullViewModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Reset zoom every time modal opens
    const image = document.getElementById('fullViewImage');
    if (image) {
        image.style.transform = 'scale(1)';
        image.style.cursor = 'zoom-in';
    }
    
    // Add animation
    if (appState.animationsEnabled) {
        modal.style.animation = 'fadeIn 0.5s ease';
    }
    
    showNotification('Class picture opened in full view. Click to zoom!', 'success');
}

// Populate gallery
function populateGallery() {
    elements.masonryGrid.innerHTML = '';
    
    websiteData.galleryImages.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = `gallery-item ${image.category}`;
        item.dataset.category = image.category;
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.title;
        img.loading = 'lazy';
        
        // Add frost melt animation on load
        img.addEventListener('load', () => {
            if (appState.animationsEnabled) {
                item.classList.add('loaded');
            }
        });
        
        item.appendChild(img);
        
        // Add click event
        item.addEventListener('click', () => openGalleryModal(image));
        
        elements.masonryGrid.appendChild(item);
    });
}

// Filter gallery
function filterGallery() {
    const items = document.querySelectorAll('.gallery-item');
    
    items.forEach(item => {
        if (appState.currentGalleryFilter === 'all' || 
            item.dataset.category === appState.currentGalleryFilter) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Open gallery modal
function openGalleryModal(image) {
    elements.galleryModalImage.src = image.src;
    elements.galleryModalTitle.textContent = image.title;
    elements.galleryModalDescription.textContent = image.description;
    elements.galleryModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Add ice crack animation
    if (appState.animationsEnabled) {
        elements.galleryModal.style.animation = 'ice-crack 0.5s ease-out';
        setTimeout(() => {
            elements.galleryModal.style.animation = '';
        }, 500);
    }
}

// Create snowfall
function createSnowfall() {
    if (!appState.snowEnabled) return;
    
    elements.snowContainer.innerHTML = '';
    
    // Create snowflakes based on device capability
    const snowflakeCount = window.innerWidth < 768 ? 50 : 100;
    
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = '❄️';
        
        // Random properties
        const size = Math.random() * 10 + 5;
        const startX = Math.random() * 100;
        const duration = Math.random() * 5 + 5;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.5 + 0.3;
        
        snowflake.style.position = 'absolute';
        snowflake.style.left = `${startX}%`;
        snowflake.style.fontSize = `${size}px`;
        snowflake.style.opacity = opacity;
        snowflake.style.animation = `snow-fall ${duration}s linear infinite`;
        snowflake.style.animationDelay = `${delay}s`;
        snowflake.style.pointerEvents = 'none';
        snowflake.style.zIndex = '1';
        
        elements.snowContainer.appendChild(snowflake);
    }
}

// Create snowflakes for counter
function createSnowflakesCounter() {
    // This is called separately from createCounterSnowflakes
    // to handle the initial loading animation
    const container = document.querySelector('.snowflake-animation');
    if (!container) return;
    
    for (let i = 0; i < 20; i++) {
        const flake = document.createElement('div');
        flake.className = 'falling-snowflake';
        flake.innerHTML = '❄️';
        flake.style.left = `${Math.random() * 100}%`;
        flake.style.animationDelay = `${Math.random() * 3}s`;
        flake.style.fontSize = `${Math.random() * 8 + 8}px`;
        flake.style.opacity = Math.random() * 0.5 + 0.3;
        
        container.appendChild(flake);
    }
}

// Toggle theme
function toggleTheme() {
    if (appState.theme === 'winter') {
        appState.theme = 'simple';
        document.body.classList.add('simple-theme');
        elements.themeToggle.innerHTML = '<i class="fas fa-star"></i>';
        showNotification('Simple Memories theme activated', 'info');
    } else {
        appState.theme = 'winter';
        document.body.classList.remove('simple-theme');
        elements.themeToggle.innerHTML = '<i class="fas fa-snowflake"></i>';
        showNotification('Winter Lights theme activated', 'info');
    }
}

// Toggle animations
function toggleAnimations() {
    appState.animationsEnabled = !appState.animationsEnabled;
    
    if (appState.animationsEnabled) {
        elements.animationToggle.innerHTML = '<i class="fas fa-running"></i>';
        startAnimations();
        showNotification('Animations enabled', 'success');
    } else {
        elements.animationToggle.innerHTML = '<i class="fas fa-pause"></i>';
        stopAnimations();
        showNotification('Animations disabled', 'info');
    }
}

// Start animations
function startAnimations() {
    // Add animation classes to elements
    document.querySelectorAll('.lantern-frame').forEach(frame => {
        frame.style.animationPlayState = 'running';
    });
    
    document.querySelectorAll('.counter-snowflake, .falling-snowflake, .rising-star').forEach(el => {
        el.style.animationPlayState = 'running';
    });
}

// Stop animations
function stopAnimations() {
    document.querySelectorAll('.lantern-frame').forEach(frame => {
        frame.style.animationPlayState = 'paused';
    });
    
    document.querySelectorAll('.counter-snowflake, .falling-snowflake, .rising-star').forEach(el => {
        el.style.animationPlayState = 'paused';
    });
}

// Toggle snow
function toggleSnow() {
    appState.snowEnabled = !appState.snowEnabled;
    
    if (appState.snowEnabled) {
        // Disable night mode if enabled
        if (appState.nightModeEnabled) {
            toggleNightMode();
        }
        
        elements.snowToggle.innerHTML = '<i class="fas fa-wind"></i>';
        createSnowfall();
        showNotification('Snowfall enabled', 'success');
    } else {
        elements.snowToggle.innerHTML = '<i class="fas fa-sun"></i>';
        elements.snowContainer.innerHTML = '';
        showNotification('Snowfall disabled', 'info');
    }
}

// Toggle music
function toggleMusic() {
    appState.musicEnabled = !appState.musicEnabled;
    
    if (appState.musicEnabled) {
        elements.musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
        elements.backgroundMusic.play().catch(e => {
            console.log('Audio play failed:', e);
            showNotification('Click to enable audio', 'info');
        });
        showNotification('Music enabled', 'success');
    } else {
        elements.musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
        elements.backgroundMusic.pause();
        showNotification('Music disabled', 'info');
    }
}

// Toggle print mode
function togglePrintMode() {
    window.print();
    showNotification('Print mode activated', 'info');
}

// Toggle winter view
function toggleWinterView() {
    appState.winterViewEnabled = !appState.winterViewEnabled;
    const btn = elements.winterViewToggle;
    
    if (appState.winterViewEnabled) {
        if (appState.nightModeEnabled) {
                    toggleNightMode();
        }
        btn.classList.add('active');
        btn.innerHTML = '<i class="fas fa-snowflake"></i> Winter View ON';
        document.body.classList.add('winter-overlay');
        showNotification('Winter overlay activated', 'success');
    } else {
        btn.classList.remove('active');
        btn.innerHTML = '<i class="fas fa-snowflake"></i> Winter View';
        document.body.classList.remove('winter-overlay');
        showNotification('Winter overlay disabled', 'info');
    }
}

// Toggle gender indicator
function toggleGender() {
    const btn = elements.genderToggle;
    const icon = btn.querySelector('i');
    
    switch (appState.genderIndicator) {
        case 'neutral':
            appState.genderIndicator = 'male';
            icon.className = 'fas fa-mars';
            btn.style.background = 'var(--color-accent)';
            showNotification('Male indicator active', 'info');
            break;
        case 'male':
            appState.genderIndicator = 'female';
            icon.className = 'fas fa-venus';
            btn.style.background = 'var(--color-gold)';
            showNotification('Female indicator active', 'info');
            break;
        case 'female':
            appState.genderIndicator = 'neutral';
            icon.className = 'fas fa-neuter';
            btn.style.background = 'var(--color-silver)';
            showNotification('Neutral indicator active', 'info');
            break;
    }
    
    updateGenderIndicator();
}

// Toggle night mode
function toggleNightMode() {
    appState.nightModeEnabled = !appState.nightModeEnabled;
    const btn = document.getElementById('nightModeToggle');
    const body = document.body;
    
    if (appState.nightModeEnabled) {
        body.classList.add('night-mode');
        btn.classList.add('active');
        btn.innerHTML = '<i class="fas fa-sun"></i>';
        showNotification('Night mode activated', 'success');
        
        // Create night snowfall
        createNightSnowfall();
        
        // Disable winter view if enabled
        if (appState.winterViewEnabled) {
            toggleWinterView();
        }
        
        // Disable regular snow if enabled
        if (appState.snowEnabled) {
            toggleSnow();
        }
    } else {
        body.classList.remove('night-mode');
        btn.classList.remove('active');
        btn.innerHTML = '<i class="fas fa-moon"></i>';
        showNotification('Night mode deactivated', 'info');
        
        // Remove night snowfall
        removeNightSnowfall();
    }
}

// Create night snowfall
function createNightSnowfall() {
    const container = document.getElementById('nightSnowContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Create fewer snowflakes for performance - different amount for mobile/desktop
    const snowflakeCount = window.innerWidth < 768 ? 40 : 80;
    
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'night-snowflake';
        
        // Random properties
        const size = Math.random() * 8 + 6; // 6-14px
        const startX = Math.random() * 100;
        const duration = Math.random() * 8 + 8; // 8-16s
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.4 + 0.3; // 0.3-0.7
        const sway = Math.random() * 100 - 50; // -50px to 50px sway
        
        snowflake.style.left = `${startX}%`;
        snowflake.style.fontSize = `${size}px`;
        snowflake.style.opacity = opacity;
        snowflake.style.animation = `night-snow-fall ${duration}s linear infinite`;
        snowflake.style.animationDelay = `${delay}s`;
        snowflake.style.animationTimingFunction = 'cubic-bezier(0.4, 0, 0.6, 1)';

        let animation = `night-snow-fall ${duration}s linear infinite ${delay}s`;

        if (i % 3 === 0) {
            animation += `, night-snow-sway ${duration * 1.5}s ease-in-out infinite ${delay}s`;
        }

        snowflake.style.animation = animation;

        container.appendChild(snowflake);
        
        // Add horizontal sway animation
        if (sway !== 0) {
            snowflake.style.animation += `, night-snow-sway ${duration * 2}s ease-in-out infinite`;
        }
        
        container.appendChild(snowflake);
    }
    
    // Add sway animation keyframes if not already added
    if (!document.getElementById('night-snow-sway-animation')) {
        const style = document.createElement('style');
        style.id = 'night-snow-sway-animation';
        style.textContent = `
            @keyframes night-snow-sway {
                0%, 100% { transform: translateX(0); }
                50% { transform: translateX(var(--sway, 0)); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Remove night snowfall
function removeNightSnowfall() {
    const container = document.getElementById('nightSnowContainer');
    if (container) {
        container.innerHTML = '';
    }
}

// Update window resize handler to recreate night snowfall
window.addEventListener('resize', () => {
    if (appState.nightModeEnabled) {
        createNightSnowfall();
    }
    if (appState.snowEnabled) {
        createSnowfall();
    }
});

// Setup night mode
function setupNightMode() {
    const nightModeBtn = document.getElementById('nightModeToggle');
    if (nightModeBtn) {
        nightModeBtn.addEventListener('click', toggleNightMode);
    }
}

// Update gender indicator in UI
function updateGenderIndicator() {
    // Update navigation aurora color
    const aurora = document.querySelector('.nav-aurora');
    if (aurora) {
        switch (appState.genderIndicator) {
            case 'male':
                aurora.style.background = 'linear-gradient(135deg, var(--color-accent), #2980b9)';
                break;
            case 'female':
                aurora.style.background = 'linear-gradient(135deg, var(--color-gold), #f39c12)';
                break;
            default:
                aurora.style.background = 'var(--gradient-aurora)';
        }
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    elements.navLinks.classList.toggle('active');
    elements.menuToggle.innerHTML = elements.navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
}

// Update active navigation link
function updateActiveNavLink(clickedLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    clickedLink.classList.add('active');
    
    // Close mobile menu if open
    if (elements.navLinks.classList.contains('active')) {
        toggleMobileMenu();
    }
}

// Handle scroll events
function handleScroll() {
    // Show/hide scroll to top button
    if (window.scrollY > 300) {
        elements.scrollToTop.classList.add('visible');
    } else {
        elements.scrollToTop.classList.remove('visible');
    }
    
    // Update active nav link based on scroll position
    updateActiveNavOnScroll();
}

// Update active navigation based on scroll position
function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Show random winter wish
function showRandomWinterWish() {
    const randomIndex = Math.floor(Math.random() * websiteData.winterWishes.length);
    const wish = websiteData.winterWishes[randomIndex];
    
    elements.winterMessage.textContent = wish.message;
    elements.messageAuthor.textContent = `- ${wish.author}`;
    
    // Add animation
    if (appState.animationsEnabled) {
        elements.winterMessage.style.animation = 'none';
        setTimeout(() => {
            elements.winterMessage.style.animation = 'fadeIn 0.5s ease';
        }, 10);
    }
}

// Close all modals
function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
    document.body.style.overflow = 'auto';
}

// notification
function showNotification(message, type) {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        background: ${type === 'success' ? '#2ecc71' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .winter-overlay::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M50 10L60 40L90 50L60 60L50 90L40 60L10 50L40 40Z' fill='white' opacity='0.03'/%3E%3C/svg%3E");
            pointer-events: none;
            z-index: 999;
        }
        
        .student-photo { color: var(--color-accent); }
        .teacher-photo { color: var(--color-gold); }
        .visitor-photo { color: var(--color-silver); }
        
        .counter-snowflake, .falling-snowflake {
            position: absolute;
            animation: fall linear infinite;
            pointer-events: none;
        }
        
        @keyframes fall {
            from { transform: translateY(-100px) rotate(0deg); }
            to { transform: translateY(100px) rotate(360deg); }
        }
        
        .rising-star {
            position: absolute;
            animation: rise linear infinite;
            pointer-events: none;
        }
        
        @keyframes rise {
            from { transform: translateY(100px) rotate(0deg); opacity: 0; }
            50% { opacity: 1; }
            to { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }
        
        .gallery-item.loaded {
            animation: frost-melt 1s ease;
        }
        
        @keyframes frost-melt {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    addAnimationStyles();
    init();
});

// Handle window resize
window.addEventListener('resize', () => {
    if (appState.snowEnabled) {
        createSnowfall();
    }
});

// Handle page visibility change
document.addEventListener('visibilitychange', () => {
    if (document.hidden && appState.musicEnabled) {
        elements.backgroundMusic.pause();
    } else if (!document.hidden && appState.musicEnabled) {
        elements.backgroundMusic.play().catch(console.error);
    }
});

// Add a global error handler
window.addEventListener('error', (e) => {
    console.error('Website error:', e.error);
    showNotification('An error occurred. Please refresh the page.', 'error');
});

// Export for debugging
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { appState, websiteData };
}