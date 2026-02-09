export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>

      </div>
    </footer>
  )
}