/* tslint:disable */
/* eslint-disable */

type ImportCallbackFunction = (url: string) => Promise<string | null>;
type ResourceLoaderFunction = (url: string) => Promise<Uint8Array>;
type CurrentElementInformationCallbackFunction = (url: string, start_line: number, start_column: number, end_line: number, end_column: number) => void;



export class CompilationResult {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    readonly component: WrappedCompiledComp | undefined;
    readonly diagnostics: Array<any>;
    readonly error_string: string;
}

export class RenderedFrame {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    readonly height: number;
    readonly pixels: Uint8Array;
    readonly width: number;
}

export class WrappedCompiledComp {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    render(): RenderedFrame;
}

/**
 * Compile the content of a string.
 *
 * Returns a promise to a compiled component which can be run with ".run()"
 *
 * `optional_import_callback` returns the source of an imported `.slint` file,
 * or `null` if the file doesn't exist, so that the search continues in the next include path.
 * `optional_resource_loader` returns the bytes of an imported font file.
 * The headless build also uses it to load image files.
 * Without it, the browser interpreter fetches the font from its URL.
 * `optional_project_root` is the URL of a project file (`slint-project.json`) or a directory that contains one.
 * The interpreter loads the project file through `optional_import_callback`.
 *
 * It compiles with the edition of its own release.
 * Use [`compile_from_string_with_style`] to select another edition.
 */
export function compile_from_string(source: string, base_url: string, optional_import_callback?: ImportCallbackFunction | null, optional_resource_loader?: ResourceLoaderFunction | null, optional_project_root?: string | null): Promise<CompilationResult>;

/**
 * Same as [`compile_from_string`], but also takes a style parameter.
 *
 * `optional_edition` is the edition to compile with, such as `"1.18"`.
 * Without it, it compiles with the edition of its own release.
 * An edition that this interpreter doesn't support is a compilation error.
 * The `edition` of a project file under `optional_project_root` takes precedence.
 */
export function compile_from_string_with_style(source: string, base_url: string, style: string, optional_import_callback?: ImportCallbackFunction | null, optional_resource_loader?: ResourceLoaderFunction | null, optional_edition?: string | null, optional_project_root?: string | null): Promise<CompilationResult>;

export function init(): void;

/**
 * Register a font for use by the `font-family` property.
 *
 * `data` is the content of a TrueType or OpenType file.
 * The families it declares become available to the components compiled afterwards,
 * under the names the font itself carries,
 * so a page that registers JetBrains Mono can then use `font-family: "JetBrains Mono"`.
 *
 * The browser build has no system fonts to query,
 * so this is the only way to draw a component in a font of the host page's choosing.
 * A font the page loaded through `@font-face` doesn't count:
 * the canvas renderer doesn't consult the CSS font database.
 *
 * Text that was already laid out keeps the font it was shaped with,
 * so register the font before compiling the component that uses it.
 *
 * Throws if the platform isn't initialized yet, or if the data declares no font family.
 */
export function register_font_from_memory(data: Uint8Array | number[]): void;
