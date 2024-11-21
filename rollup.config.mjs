import typescript from "@rollup/plugin-typescript";

export default {
    input: "src/index.ts",
    output: {
        format: 'es',
        dir: 'dist'
    },
    plugins: [typescript()]
}