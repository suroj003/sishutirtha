import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { GoogleGenAI } from "@google/genai";

import express from "express";
import cors from "cors";
import 'dotenv/config';
const app = express();
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

// Serve a dynamic config endpoint

const schoolInfo=`SISHU TIRTHA HIGH SCHOOL - COMPLETE INFORMATION
================================================
Name: Sishu Tirtha High School
Founded: 16 April 1975 (2 Boishakh)
Address: PWD Road, Silchar - 788001, Cachar, Assam
Phone: +91 94353 72983
Email: sishutirtha1975@gmail.com
Website: sishutirthahighschool.netlify.app
Instagram: @sishutirtha.1975
Board: SEBA (Board of Secondary Education, Assam)
Medium: English Medium
Classes: Nursery to Class X
Founder: Late Mrinalini Bhattacharjee
Director: Mr. Samar Bijoy Chakraborty
Class strength: approximately 20 students per class

FEE STRUCTURE
=============
- Nursery, KG-1, KG-2: Rs. 500 per month
- Class I to Class VII: Rs. 750 per month
- Class VIII to Class X: Rs. 1,000 per month
Fees are paid monthly at the school office.
Late payment may attract a fine. Fees once paid are non-refundable.

ADMISSION
=========
- Admission is done OFFLINE at the school premises only
- No entrance examination required
- Classes available for admission: Nursery, KG-1, KG-2, Class I to Class X
- Documents needed:
  * Birth certificate of student
  * Transfer Certificate (TC) from previous school if applicable
  * Previous year mark sheet / report card
  * 4 passport-size photographs
  * Proof of residence (Aadhaar card / Voter ID of parent)
  * Caste certificate if applicable
- Contact school office for current admission dates

SCHOOL TIMINGS
==============
Monday to Friday:
- School opens: 9:45 AM
- Period 1: 10:00 AM - 10:45 AM
- Period 2: 10:45 AM - 11:30 AM
- Period 3: 11:30 AM - 12:15 PM
- Period 4: 12:15 PM - 1:00 PM
- Break / Recess: 1:00 PM - 1:30 PM (30 minutes)
- Period 5: 1:30 PM - 2:00 PM
- Period 6: 2:00 PM - 2:30 PM
- School closes: 2:30 PM
Total: 6 periods per day with 1 break

Saturday:
- School opens: 9:45 AM
- PT and Yoga session: 9:45 AM - 10:30 AM
- Classes: 10:30 AM - 12:30 PM
- School closes: 12:45 PM

Sunday is a weekly holiday.

UNIFORM
=======
The school has TWO official uniforms.
Uniform is available at: Abhinandan Cloth Store, Central Road, Silchar

Uniform 1 - Regular Uniform (Monday, Wednesday, Thursday, Friday):
- Red/maroon checkered shirt with school logo (tucked in)
- Maroon/dark red formal trousers
- Red striped school tie
- Black formal shoes and dark socks
- School ID card on lanyard (must be worn daily)

Uniform 2 - PT Uniform (Tuesday and Saturday):
- Yellow polo T-shirt with school logo and red/maroon accents
- Maroon track trousers
- White sports shoes
- Saturday has mandatory PT and Yoga session in this uniform

Items provided by the school (no need to buy):
- School ID Card (issued at admission)
- School Diary (every session)
- Syllabus (class-wise, start of session)

EXAMINATION PATTERN
===================
4 examinations per year:
1. Unit Test 1 (UT-1): 50 marks - Weightage in merit: 20%
2. Half Yearly (HF): 100 marks - Weightage in merit: 30%
3. Unit Test 2 (UT-2): 50 marks - Weightage in merit: 20%
4. Annual Examination: 100 marks - Weightage in merit: 50%

Merit is calculated on weighted percentage basis.
Report cards issued after each examination.
Minimum 75% attendance required to appear in exams.
Students below 75% attendance may be barred from exams.

ELECTIVE SUBJECTS (Class VIII to X)
=====================================
From Class VIII, students choose ONE elective subject:
- Fine Arts
- Advanced Mathematics
- Geography
- Computer Science
Elective cannot be changed once selected at start of Class VIII.
Elective forms part of SEBA board examination.

MEDIUM AND LANGUAGE
===================
English Medium school.
MIL (Mother Tongue Language) is compulsory - students must choose ONE:
- Bengali
- Hindi

SUBJECTS: CLASS I TO VII
=========================
- English (includes dictation and reading practice up to Class V)
- English 2 / Grammar (separate grammar paper)
- MIL - Bengali or Hindi (student's choice)
- Mathematics
- Science
- Social Studies
- Computer
- Drawing
- Music
- General Knowledge (GK)

SUBJECTS: CLASS VIII TO X
==========================
- English
- MIL (Bengali or Hindi)
- Mathematics
- Science (Physics, Chemistry, Biology as separate sections)
- Social Science (History, Geography, Political Science, Economics)
- Elective subject (Fine Arts / Advanced Maths / Geography / Computer Science)

Project work and assignments are given for ALL subjects during summer and winter vacations.
Submission is mandatory.

TRANSPORT
=========
No school bus available.
Students use local auto-rickshaws (widely available throughout Silchar).
School is on PWD Road, a major road accessible from all parts of Silchar.
Distance: approximately 2-3 km from Silchar Railway Station.

SCHOOL HOUSES
=============
4 inter-house competition groups:
1. Netaji House - Green colour (named after Netaji Subhas Chandra Bose)
2. Rabindranath Tagore House - White colour (named after Rabindranath Tagore)
3. Vivekananda House - Yellow colour (named after Swami Vivekananda)
4. Bipin Chandra Pal House - Blue colour (named after Bipin Chandra Pal)

Each house conducts morning assembly for one full week on rotation.

MORNING ASSEMBLY
================
Daily assembly conducted by students. Each house takes one week rotation.
Assembly order:
1. Saraswati Bandana (opening prayer to Goddess Saraswati)
2. School Song in Bengali (written by Shyamapada Bhattacharjee)
3. School Song in English (new song)
4. Indian National Pledge
5. National Anthem (Jana Gana Mana)
6. News reading by a student
7. Quote of the Day
8. Recitation (poem or literary piece)

SCHOOL EVENTS AND CELEBRATIONS
================================
1. Foundation Day - 16 April (school anniversary, established 1975)
2. Saraswati Puja - January/February (worship of Goddess of knowledge)
3. Basanta Utsav / Dol Purnima - March (Bengali spring festival, pre-Holi celebration)
4. Rabindra Jayanti - 25 Boishakh / May (birth anniversary of Rabindranath Tagore)
5. Sharod Utsav - October before Durga Puja (autumn cultural festival)
6. Teachers Day - 5 September (special programmes honouring teachers)
7. Annual Sports Day - 3-day inter-house sports event held in winter

HOLIDAYS
========
National holidays: Republic Day (26 Jan), Independence Day (15 Aug), Gandhi Jayanti (2 Oct),
Good Friday, Holi, Diwali, Eid-ul-Fitr, Eid-ul-Adha, Christmas, etc.

Assam state holidays: Bihu (Rongali/Bohag, Magh, Kongali), Durga Puja, Kali Puja, etc.
Check school notice board for exact dates each year.

FACILITIES
==========
- Spacious well-ventilated classrooms
- Science Laboratory (for Class VIII-X)
- Computer Laboratory
- Library with academic and reference books
- Playground for sports
- Clean drinking water
- Sanitation facilities (separate for boys and girls)
- PT and Yoga every Saturday
- Online portal: sishutirthahighschool.netlify.app/login
- Notice board updated regularly

COACHING AND PRIVATE TUITIONS
==============================
- A coaching centre is run by 2 teachers from the school
- Coaching covers all subjects for all classes
- Several school teachers also offer private tuitions at their homes
- Subjects for private tuition: Mathematics, Science, English, Social Science, Bengali
- Contact school office for coaching/tuition details

SCHOOL VALUES
=============
Five core values: Punctuality, Honesty, Keeping One's Word, Discipline, Respect for All

NOTABLE ALUMNI
==============
- Kalika Prashad Bhattacharya - Renowned Bengali folk singer
- Suroj Nath - CSE student at NIT Silchar (Class of 2023), built the school's first official website

CONTACT AND OFFICE HOURS
=========================
Phone: +91 94353 72983
Email: sishutirtha1975@gmail.com
Website: sishutirthahighschool.netlify.app
Instagram: @sishutirtha.1975
Office hours: Monday-Friday 9:30 AM - 3:00 PM, Saturday 9:30 AM - 1:30 PM
Sunday: Closed`;
// Gemini setup

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post("/ask", async (req, res) => {
  const { question } = req.body;
  if (!question) return res.status(400).json({ error: "No question provided" });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: question,
      config: {
        systemInstruction: `You are the official AI assistant for Sishu Tirtha High School, you have to reply or respond to queries asked by students parents or staff.
        You have the access to all school information ${schoolInfo}
        Reply politely and clearly if any student ask some academic questions solve his/her doubt with examples, if the user ask anything not related to studies or school you'll reply with a polite message indicating you can only with school-related and academic topics.
        Always be helpful and give prescise reply and greet the user before starting communication. Remember you are being developed by Suroj Nath, an ex student of this school, so you can also give some information about him asked and don't give any hallucinated reply about him, always be honest and upto the mark correct. And be formal and respectful to all the users. School's reputation is in your hands. Thankyou.`,
      },
    });
    res.json({ answer: response.text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI request failed: " + err.message });
  }
});
// Serve the chat.html file if someone hits http://localhost:3000 directly
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'chat.html'));
});

// Start the server on Port 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Backend AI Server is running on port ${PORT}`);
});