export default function Footer() {
  return (
    <footer className="w-full mt-auto">
      <div className="container mx-auto px-4 py-4 flex flex-col items-center text-gray-500 dark:text-gray-400 text-sm">
        <p className="text-center">
          © {new Date().getFullYear()} smol tools
        </p>
      </div>
    </footer>
  );
}
