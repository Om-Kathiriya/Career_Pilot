# Career_Pilot
<div align="center">

# 🚀 CareerBoost AI

**An AI-powered career development platform built to help job seekers analyze resumes, find skill gaps, and prepare for interviews — all in one place.**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Latest-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

</div>

---

## 📖 What is this?

I built CareerBoost AI as a personal project after feeling overwhelmed with the job application process — I wasn't sure which skills were actually missing from my resume, what companies were looking for, or how to prepare for interviews properly.

So I built something to fix that. CareerBoost AI is a full-stack platform that uses NLP and basic ML to give you real, actionable feedback on your resume, matches you against job descriptions, generates a personalized learning roadmap, and lets you practice interviews with AI feedback.

---

## ✨ Features

| Module | What it does |
|---|---|
| 📄 **Resume Analyzer** | Scores your resume against ATS systems (0–100), highlights missing keywords, and gives section-by-section feedback |
| 🔍 **Job Analyzer** | Paste a job description and see how well your profile matches, plus which skills you're missing |
| 🎯 **Skill Gap Analysis** | Pick a target role, input your current skills, and get a prioritized list of what to learn next |
| 🗺️ **Learning Roadmap** | Generates a step-by-step roadmap with curated resources for 20+ career paths |
| 🎤 **Interview Prep** | Practice with role-specific questions and get AI feedback on your answers |
| 💼 **Job Tracker** | Track all your applications, interview dates, and follow-ups in one place |
| 📰 **Company News** | Stay updated on companies you're targeting |

---

## 🛠️ Tech Stack

**Frontend**
- React 18 + Vite
- Tailwind CSS (glassmorphism UI)
- Lucide React for icons

**Backend**
- FastAPI (Python)
- MongoDB + PyJWT for auth
- Pydantic for data validation

**AI / NLP**
- spaCy for skill extraction and NER
- TF-IDF + Cosine Similarity for resume–job matching
- scikit-learn for ML components
- Sentiment analysis for interview answer evaluation

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- Python >= 3.10
- MongoDB

### 1. Clone the repo

```bash
git clone https://github.com/Om-Kathiriya/CareerBoost-AI.git
cd CareerBoost-AI
```

### 2. Set up the backend

```bash
cd backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
python -m spacy download en_core_web_md

cp .env.example .env            # Add your MongoDB URI and JWT_SECRET
uvicorn main:app --reload --port 8000
```

Backend runs at `http://localhost:8000` — API docs at `http://localhost:8000/docs`

### 3. Set up the frontend

```bash
cd frontend
npm install
cp .env.example .env            # Set VITE_API_URL=http://localhost:8000
npm run dev
```

Frontend runs at `http://localhost:5173`

---

## 📁 Project Structure

```
CareerBoost-AI/
├── frontend/
│   └── src/
│       ├── components/       # Navbar, Sidebar, shared UI
│       ├── pages/            # Dashboard, Roadmap, Interview, etc.
│       ├── services/         # API calls
│       └── context/          # Auth and global state
│
├── backend/
│   ├── app/
│   │   ├── routes/           # Auth, resume, jobs, roadmap endpoints
│   │   ├── models/           # DB models
│   │   ├── schemas/          # Pydantic schemas
│   │   └── services/         # Business logic
│   └── main.py
│
└── ai_ml/
    ├── resume_analyzer/      # ATS scoring with TF-IDF
    ├── job_analyzer/         # Job description parsing + matching
    ├── skill_gap/            # Gap analysis logic
    ├── interview_prep/       # Question bank + answer evaluation
    └── roadmap_generator/    # 20 career path templates
```

---

## 🧠 How the AI parts work

**Resume Scoring** — Extracts text from your resume, tokenizes it, and uses TF-IDF with cosine similarity to compare it against the job description. Outputs a 0–100 ATS score with missing keyword highlights.

**Skill Extraction** — Uses spaCy with a custom NER pipeline trained to recognize tech skills, tools, and certifications from free-form text (both resumes and job descriptions).

**Interview Feedback** — Evaluates answers using sentiment analysis and keyword relevance scoring, then returns feedback on confidence, completeness, and clarity.

---

## 🗺️ Available Career Roadmaps

Data Analyst · Machine Learning Engineer · Frontend Developer · Backend Developer · Full Stack Developer · Data Scientist · DevOps Engineer · Cloud Engineer · Software Engineer · AI/ML Engineer · Product Manager · Cybersecurity Analyst · Mobile Developer · Data Engineer · Database Administrator · UI/UX Designer · QA Engineer · Technical Lead · Systems Architect · Business Analyst

---

## 📌 Roadmap (what's next)

- [ ] Dark mode
- [ ] Cover letter generator
- [ ] LinkedIn profile analyzer
- [ ] Mobile app (React Native)
- [ ] AI chatbot assistant

---

## 🤝 Contributing

Pull requests are welcome! If you find a bug or want to suggest a feature, feel free to open an issue.

1. Fork the repo
2. Create your branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push and open a PR

---

## 📄 License

MIT — feel free to use, modify, and distribute.

---

<div align="center">

Built by [Om Kathiriya](https://github.com/Om-Kathiriya) · [LinkedIn](https://linkedin.com/in/om-kathiriya-410007212)

</div>
