export const MenuButton = ({ linkTo, label }) => {
  return (
    <a 
      href={linkTo} 
      class="border border-gray-500 rounded-md font-semibold px-4 py-2 text-lg text-slate-200 hover:bg-slate-700">
        {label}
    </a>
  )
};


/*active class
 class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
 */