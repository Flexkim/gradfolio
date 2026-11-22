import Link from "next/link";

const projects = [
  { title: "AI-powered soil health monitoring", author: "Amina Yusuf", degree: "PhD", field: "Agriculture" },
  { title: "Accessible digital banking for rural communities", author: "Daniel Mensah", degree: "Master’s", field: "FinTech" },
  { title: "Low-cost solar irrigation controller", author: "Leila Osman", degree: "Undergraduate", field: "Engineering" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-xl font-bold text-indigo-950">Gradfolio<span className="text-violet-600">.</span></Link>
        <div className="flex items-center gap-3">
          <button className="hidden rounded-full px-4 py-2 text-sm font-semibold sm:block">Sign in</button>
          <Link href="/publish" className="rounded-full bg-indigo-950 px-5 py-2.5 text-sm font-semibold text-white">Publish project</Link>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[1.15fr_.85fr] md:py-24">
        <div>
          <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-semibold text-violet-700">Built for academic creators</span>
          <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-indigo-950 md:text-7xl">Your work deserves a lasting place.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Publish undergraduate, master’s, and doctoral projects with a verifiable record of authorship.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/publish" className="rounded-full bg-violet-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-200">Start publishing</Link>
            <button className="rounded-full border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-800">Explore projects</button>
          </div>
        </div>
        <div className="relative rounded-[2rem] bg-gradient-to-br from-violet-100 to-indigo-100 p-8">
          <div className="rounded-3xl bg-white p-6 shadow-xl shadow-indigo-200/40">
            <div className="mb-8 flex items-center justify-between"><div className="h-10 w-10 rounded-full bg-violet-600"/><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Verified</span></div>
            <div className="h-3 w-2/3 rounded-full bg-slate-200"/><div className="mt-3 h-3 w-full rounded-full bg-slate-100"/><div className="mt-3 h-3 w-4/5 rounded-full bg-slate-100"/>
            <div className="mt-8 grid grid-cols-3 gap-3"><div className="h-20 rounded-2xl bg-violet-50"/><div className="h-20 rounded-2xl bg-indigo-50"/><div className="h-20 rounded-2xl bg-emerald-50"/></div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50/70 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between"><div><p className="font-semibold text-violet-600">Discover</p><h2 className="mt-2 text-3xl font-bold text-indigo-950">Featured projects</h2></div><button className="text-sm font-bold text-indigo-950">View all →</button></div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">{projects.map((project) => (
            <article key={project.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between"><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{project.degree}</span><span className="text-xs font-semibold text-slate-400">2026</span></div>
              <h3 className="mt-6 min-h-14 text-xl font-bold leading-7 text-indigo-950">{project.title}</h3>
              <p className="mt-3 text-sm text-slate-500">{project.field} · {project.author}</p>
            </article>
          ))}</div>
        </div>
      </section>
    </main>
  );
}
