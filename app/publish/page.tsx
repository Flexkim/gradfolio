import type { Metadata } from "next";

export const metadata: Metadata = { title: "Publish | Gradfolio" };

export default function PublishPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-sm font-bold text-violet-600">← Back to Gradfolio</a>
        <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm md:p-10">
          <h1 className="text-3xl font-bold text-indigo-950">Publish a project</h1>
          <p className="mt-2 text-slate-500">Create a permanent, verifiable record of your academic work.</p>
          <form className="mt-8 space-y-5">
            <div><label className="mb-2 block text-sm font-bold">Project title</label><input required className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500" placeholder="Enter a clear, descriptive title" /></div>
            <div><label className="mb-2 block text-sm font-bold">Degree level</label><select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3"><option>Undergraduate</option><option>Master’s</option><option>PhD</option></select></div>
            <div><label class="mb-2 block text-sm font-bold">Abstract</label><textarea rows={5} className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500" placeholder="Summarize the project, method, and outcome" /></div>
            <button type="submit" className="w-full rounded-xl bg-violet-600 px-5 py-3.5 font-bold text-white">Continue to upload</button>
          </form>
        </div>
      </div>
    </main>
  );
}
