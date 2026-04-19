# Career_Pilot
# CareerBoost AI

I built this during my 2nd year when I was applying for internships and had no idea why I kept getting rejected. Turned out my resume was pretty bad for ATS systems and I was missing a bunch of skills I didn't even know were required. So I just... built something to fix that.

It's a career platform that analyzes your resume, matches it against job descriptions, tells you what skills you're missing, and helps you prep for interviews.

---

## What it does

- **Resume Analyzer** — upload your resume and get an ATS score with feedback on what's missing
- **Job Analyzer** — paste any job description and see how your profile matches against it
- **Skill Gap** — pick a role you want, it tells you what skills you need to get there
- **Learning Roadmap** — step by step plan with actual resources, not just a list of topics
- **Interview Prep** — practice questions with AI feedback on your answers
- **Job Tracker** — just a simple tracker so you don't lose track of where you applied

---

## Stack

**Frontend** — React, Tailwind CSS, Vite  
**Backend** — FastAPI, MongoDB, JWT auth  
**AI stuff** — spaCy for skill extraction, TF-IDF + cosine similarity for resume matching, sentiment analysis for interview feedback

---

## How to run it

You'll need Node 18+, Python 3.10+, and MongoDB running locally.

**Backend**
```bash
cd backend
python -m venv venv
venv/Scripts/activate
pip install -r requirements.txt
python -m spacy download en_core_web_md
cp .env.example .env
uvicorn main:app --reload --port 8000
```

**Frontend**
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Frontend → `localhost:5173`  
Backend → `localhost:8000`  
API docs → `localhost:8000/docs`

---

## Folder structure

```
CareerBoost-AI/
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── services/
├── backend/
│   ├── app/
│   │   ├── routes/
│   │   ├── models/
│   │   └── services/
│   └── main.py
└── ai_ml/
    ├── resume_analyzer/
    ├── job_analyzer/
    ├── skill_gap/
    ├── interview_prep/
    └── roadmap_generator/
```

---

## Stuff I want to add later

- dark mode (the UI really needs it)
- cover letter generator
- LinkedIn profile analyzer
- maybe a mobile app someday

---

## License

MIT
