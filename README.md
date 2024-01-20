This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Info about traffic light example
All the magic happens in tailwind.config.ts and the tailwindcss classes in app/page.tsx `animate-red-loop`, `animate-yellow-loop`, `animate-green-loop`.
```ts tailwind.config.ts config
...
theme: {
    ...
    extend: {
        ...
        animation: {
            'red-loop': 'redLoop 10s steps(1) infinite',
            'yellow-loop': 'yellowLoop 10s steps(1) infinite',
            'green-loop': 'greenLoop 10s steps(1) infinite',
            },
            keyframes: {
            redLoop: {
                '0%, 42%': { backgroundColor: 'red' }, // Start being transparent at 42% of the duration
                '42%, 100%': { backgroundColor: 'transparent' },  // end being transparent at 100% of the duration

            },
            yellowLoop: {
                '0%, 80%': { backgroundColor: 'transparent' }, // start with being transparent until 80% of the duration
                '80%, 100%': { backgroundColor: 'yellow' }, // end with being yellow until 100% of the duration
            },
            greenLoop: {
                '0%, 42%': { backgroundColor: 'transparent' }, // start being transparent until 42% of the duration
                '42%, 80%': { backgroundColor: 'green' }, // be visible between 42% and 80% of the duration
                '80%, 100%': { backgroundColor: 'transparent' }, // end being transparent until 100% of the duration
            },
        }
    },
    ...
}
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
