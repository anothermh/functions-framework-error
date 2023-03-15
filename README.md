# Demo for import issue with @google-cloud/functions-framework

This is a demo for a TypeScript import issue with:

```typescript
import { type Context } from '@google-cloud/functions-framework/build/src/functions'
```

Which returns the following error when `moduleResolution` in `tsconfig.json` is set to `nodenext`:

```plaintext
Cannot find module '@google-cloud/functions-framework/build/src/functions' or its corresponding type declarations.ts(2307)
```

## Steps to reproduce

1. Clone this repo
2. Open in VSCode
3. Install the recommended extensions
4. Use the integrated TypeScript SDK at `.yarn/sdks/typescript` when prompted
5. Reload or restart VSCode
6. Open `src/index.ts` and observe the error
7. Open `tsconfig.json` and change `moduleResolution` to `node`
8. Observe the error is gone

## Demonstration

[demo.mov](demo.mov)
