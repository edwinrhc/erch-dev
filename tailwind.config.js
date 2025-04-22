/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // mono: ['"Fira Code"', "monospace"],
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
