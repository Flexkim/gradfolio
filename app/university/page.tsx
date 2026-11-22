import Link from "next/link";

export default function UniversityPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm font-bold text-violet-600">← Back to Gradfolio</Link>
        <header className="mt-8 max-w-3xl">
          <span className="rounded-full border border-indigo-100 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-indigo-700">University workspace</span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-indigo-950 md:text-5xl">Review student submissions with care.</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">Upload a submission for similarity screening and authorship review. Results should support—not replace—academic judgment.</p>
        </header>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-bold text-indigo-950">Start a review</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">Submit work only when your institution is authorized to review it and you have followed its privacy and consent requirements.</p>
            <form className="mt-7 space-y-5">
              <div>
                <label htmlFor="institution" className="mb-2 block text-sm font-bold text-slate-800">Institution</label>
                <input id="institution" name="institution" required placeholder="University or department name" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100" />
              </div>
              <div>
                <label htmlFor="student" className="mb-2 block text-sm font-bold text-slate-800">Student name or submission ID</label>
                <input id="student" name="student" required placeholder="Use your institution’s approved identifier" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100" />
              </div>
              <div>
                <label htmlFor="work" className="mb-2 block text-sm font-bold text-slate-800">Project file</label>
                <input id="work" name="work" type="file" accept=".pdf,.doc,.docx,.txt" required className="block w-full rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-violet-100 file:px-4 file:py-2 file:font-semibold file:text-violet-800" />
                <p className="mt-2 text-xs text-slate-500">Accepted formats: PDF, DOC, DOCX, TXT. Upload processing is not connected yet.</p>
              </div>
              <label className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                <input type="checkbox" required className="mt-1 accent-violet-600" />
                <span>I confirm I am authorized to submit this work and have informed the student according to institutional policy.</span>
              </label>
              <button type="button" className="w-full cursor-not-allowed rounded-xl bg-indigo-950 px-5 py-3.5 font-bold text-white opacity-70" title="Review processing is not available in this prototype">Submit for review (coming soon)</button>
            </form>
          </section>

          <aside className="space-y-5">
            <section className="rounded-3xl bg-indigo-950 p-6 text-white md:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-xl">✓</div>
              <h2 className="mt-5 text-xl font-bold">What a review can show</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-indigo-100">
                <li>• Text similarity matches that an educator can inspect.</li>
                <li>• Available authorship or AI-writing indicators, where supported.</li>
                <li>• A review record with evidence and human decision notes.</li>
              </ul>
            </section>
            <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
              <h2 className="font-bold text-amber-950">Important: indicators are not proof</h2>
              <p className="mt-2 text-sm leading-6 text-amber-900">AI-writing detectors can be inaccurate and may produce false positives or miss AI-assisted text. Similarity is not automatically plagiarism. Do not make disciplinary decisions from an automated score alone; verify sources and give the student a chance to respond.</p>
            </section>
            <p className="px-1 text-xs leading-5 text-slate-500">Prototype only: files are not uploaded or analyzed, and this page does not determine whether work is AI-generated or plagiarized. A secure backend, institutional access controls, retention policy, and vetted review providers are needed before handling real student work.</p>
          </aside>
        </div>
      </div>
    </main>
  );
}
