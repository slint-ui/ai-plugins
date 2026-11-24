/* @ts-self-types="./slint_wasm_interpreter.d.ts" */

class CompilationResult {
    static __wrap(ptr) {
        const obj = Object.create(CompilationResult.prototype);
        obj.__wbg_ptr = ptr;
        CompilationResultFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        CompilationResultFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_compilationresult_free(ptr, 0);
    }
    /**
     * @returns {WrappedCompiledComp | undefined}
     */
    get component() {
        const ret = wasm.compilationresult_component(this.__wbg_ptr);
        return ret === 0 ? undefined : WrappedCompiledComp.__wrap(ret);
    }
    /**
     * @returns {Array<any>}
     */
    get diagnostics() {
        const ret = wasm.compilationresult_diagnostics(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {string}
     */
    get error_string() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.compilationresult_error_string(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
}
if (Symbol.dispose) CompilationResult.prototype[Symbol.dispose] = CompilationResult.prototype.free;
exports.CompilationResult = CompilationResult;

class RenderedFrame {
    static __wrap(ptr) {
        const obj = Object.create(RenderedFrame.prototype);
        obj.__wbg_ptr = ptr;
        RenderedFrameFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        RenderedFrameFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_renderedframe_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    get height() {
        const ret = wasm.renderedframe_height(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {Uint8Array}
     */
    get pixels() {
        const ret = wasm.renderedframe_pixels(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {number}
     */
    get width() {
        const ret = wasm.renderedframe_width(this.__wbg_ptr);
        return ret >>> 0;
    }
}
if (Symbol.dispose) RenderedFrame.prototype[Symbol.dispose] = RenderedFrame.prototype.free;
exports.RenderedFrame = RenderedFrame;

class WrappedCompiledComp {
    static __wrap(ptr) {
        const obj = Object.create(WrappedCompiledComp.prototype);
        obj.__wbg_ptr = ptr;
        WrappedCompiledCompFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        WrappedCompiledCompFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_wrappedcompiledcomp_free(ptr, 0);
    }
    /**
     * @returns {RenderedFrame}
     */
    render() {
        const ret = wasm.wrappedcompiledcomp_render(this.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return RenderedFrame.__wrap(ret[0]);
    }
}
if (Symbol.dispose) WrappedCompiledComp.prototype[Symbol.dispose] = WrappedCompiledComp.prototype.free;
exports.WrappedCompiledComp = WrappedCompiledComp;

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
 * @param {string} source
 * @param {string} base_url
 * @param {ImportCallbackFunction | null} [optional_import_callback]
 * @param {ResourceLoaderFunction | null} [optional_resource_loader]
 * @param {string | null} [optional_project_root]
 * @returns {Promise<CompilationResult>}
 */
function compile_from_string(source, base_url, optional_import_callback, optional_resource_loader, optional_project_root) {
    let ptr0, len0, ptr1, len1, ptr2, len2;
    try {
        ptr0 = passStringToWasm0(source, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        len0 = WASM_VECTOR_LEN;
        ptr1 = passStringToWasm0(base_url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        len1 = WASM_VECTOR_LEN;
        ptr2 = isLikeNone(optional_project_root) ? 0 : passStringToWasm0(optional_project_root, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        len2 = WASM_VECTOR_LEN;
    } catch (e) {
        if (ptr2) { wasm.__wbindgen_free(ptr2, len2 * 1, 1); }
        if (ptr1) { wasm.__wbindgen_free(ptr1, len1 * 1, 1); }
        if (ptr0) { wasm.__wbindgen_free(ptr0, len0 * 1, 1); }
        throw e;
    }
    const ret = wasm.compile_from_string(ptr0, len0, ptr1, len1, isLikeNone(optional_import_callback) ? 0 : addToExternrefTable0(optional_import_callback), isLikeNone(optional_resource_loader) ? 0 : addToExternrefTable0(optional_resource_loader), ptr2, len2);
    return ret;
}
exports.compile_from_string = compile_from_string;

/**
 * Same as [`compile_from_string`], but also takes a style parameter.
 *
 * `optional_edition` is the edition to compile with, such as `"1.18"`.
 * Without it, it compiles with the edition of its own release.
 * An edition that this interpreter doesn't support is a compilation error.
 * The `edition` of a project file under `optional_project_root` takes precedence.
 * @param {string} source
 * @param {string} base_url
 * @param {string} style
 * @param {ImportCallbackFunction | null} [optional_import_callback]
 * @param {ResourceLoaderFunction | null} [optional_resource_loader]
 * @param {string | null} [optional_edition]
 * @param {string | null} [optional_project_root]
 * @returns {Promise<CompilationResult>}
 */
function compile_from_string_with_style(source, base_url, style, optional_import_callback, optional_resource_loader, optional_edition, optional_project_root) {
    let ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4;
    try {
        ptr0 = passStringToWasm0(source, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        len0 = WASM_VECTOR_LEN;
        ptr1 = passStringToWasm0(base_url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        len1 = WASM_VECTOR_LEN;
        ptr2 = passStringToWasm0(style, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        len2 = WASM_VECTOR_LEN;
        ptr3 = isLikeNone(optional_edition) ? 0 : passStringToWasm0(optional_edition, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        len3 = WASM_VECTOR_LEN;
        ptr4 = isLikeNone(optional_project_root) ? 0 : passStringToWasm0(optional_project_root, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        len4 = WASM_VECTOR_LEN;
    } catch (e) {
        if (ptr4) { wasm.__wbindgen_free(ptr4, len4 * 1, 1); }
        if (ptr3) { wasm.__wbindgen_free(ptr3, len3 * 1, 1); }
        if (ptr2) { wasm.__wbindgen_free(ptr2, len2 * 1, 1); }
        if (ptr1) { wasm.__wbindgen_free(ptr1, len1 * 1, 1); }
        if (ptr0) { wasm.__wbindgen_free(ptr0, len0 * 1, 1); }
        throw e;
    }
    const ret = wasm.compile_from_string_with_style(ptr0, len0, ptr1, len1, ptr2, len2, isLikeNone(optional_import_callback) ? 0 : addToExternrefTable0(optional_import_callback), isLikeNone(optional_resource_loader) ? 0 : addToExternrefTable0(optional_resource_loader), ptr3, len3, ptr4, len4);
    return ret;
}
exports.compile_from_string_with_style = compile_from_string_with_style;

function init() {
    wasm.init();
}
exports.init = init;

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
 * @param {Uint8Array | number[]} data
 */
function register_font_from_memory(data) {
    const ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.register_font_from_memory(ptr0, len0);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}
exports.register_font_from_memory = register_font_from_memory;
function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg_Error_208446807d0d1e30: function(arg0, arg1) {
            const ret = Error(getStringFromWasm0(arg0, arg1));
            return ret;
        },
        __wbg___wbindgen_debug_string_f249a2a76caa9a55: function(arg0, arg1) {
            const ret = debugString(arg1);
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_is_function_741ff2bb612836f5: function(arg0) {
            const ret = typeof(arg0) === 'function';
            return ret;
        },
        __wbg___wbindgen_is_null_c22311b1cc228e3a: function(arg0) {
            const ret = arg0 === null;
            return ret;
        },
        __wbg___wbindgen_is_undefined_be5b34249ff1fc15: function(arg0) {
            const ret = arg0 === undefined;
            return ret;
        },
        __wbg___wbindgen_rethrow_d953c34c2e20677f: function(arg0) {
            throw arg0;
        },
        __wbg___wbindgen_string_get_7ce8eee7fd327545: function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'string' ? obj : undefined;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_throw_4c88d8bf264fd984: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg__wbg_cb_unref_09736879a3f67559: function(arg0) {
            arg0._wbg_cb_unref();
        },
        __wbg_arrayBuffer_2c99a9ba14ba536c: function() { return handleError(function (arg0) {
            const ret = arg0.arrayBuffer();
            return ret;
        }, arguments); },
        __wbg_call_a410eb4b59ed5965: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.call(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_compilationresult_new: function(arg0) {
            const ret = CompilationResult.__wrap(arg0);
            return ret;
        },
        __wbg_error_757e9472f8410341: function(arg0, arg1) {
            let deferred0_0;
            let deferred0_1;
            try {
                deferred0_0 = arg0;
                deferred0_1 = arg1;
                console.error(getStringFromWasm0(arg0, arg1));
            } finally {
                wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
            }
        },
        __wbg_error_8cbc7e0f8007704e: function(arg0, arg1) {
            console.error(getStringFromWasm0(arg0, arg1));
        },
        __wbg_fetch_c30fc2ed77d76a76: function(arg0, arg1, arg2) {
            const ret = arg0.fetch(getStringFromWasm0(arg1, arg2));
            return ret;
        },
        __wbg_getTime_edc91481cbc4cd78: function(arg0) {
            const ret = arg0.getTime();
            return ret;
        },
        __wbg_getTimezoneOffset_87127d92c2c117e9: function(arg0) {
            const ret = arg0.getTimezoneOffset();
            return ret;
        },
        __wbg_instanceof_Error_74e3cca0c4a69161: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Error;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Response_5b0b4f7f1daeae51: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Response;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Window_5cf453f5639aa1a2: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Window;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_is_2248ff2b575d60c7: function(arg0, arg1) {
            const ret = Object.is(arg0, arg1);
            return ret;
        },
        __wbg_length_186163212ffe79c3: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_log_7bec9c2cc451969e: function(arg0, arg1) {
            console.log(getStringFromWasm0(arg0, arg1));
        },
        __wbg_message_43d8c8f1d543a349: function(arg0) {
            const ret = arg0.message;
            return ret;
        },
        __wbg_naturalHeight_fb7d27a9642e796c: function(arg0) {
            const ret = arg0.naturalHeight;
            return ret;
        },
        __wbg_naturalWidth_c3b5a9ac32cd185e: function(arg0) {
            const ret = arg0.naturalWidth;
            return ret;
        },
        __wbg_navigator_c17f443a6fe5d38d: function(arg0) {
            const ret = arg0.navigator;
            return ret;
        },
        __wbg_new_0_36d738a0c8cfac43: function() {
            const ret = new Date();
            return ret;
        },
        __wbg_new_13de428334042d26: function(arg0) {
            const ret = new Uint8Array(arg0);
            return ret;
        },
        __wbg_new_37eb45aaf5eeb820: function() {
            const ret = new Array();
            return ret;
        },
        __wbg_new_3e95cd7386bb9a6c: function(arg0) {
            const ret = new Date(arg0);
            return ret;
        },
        __wbg_new_bb74001155cb8ca8: function() {
            const ret = new Error();
            return ret;
        },
        __wbg_new_cd4348290afae586: function() {
            const ret = new Object();
            return ret;
        },
        __wbg_new_d2b929834da740d3: function() { return handleError(function () {
            const ret = new Image();
            return ret;
        }, arguments); },
        __wbg_new_typed_e09da9dae6ee5935: function(arg0, arg1) {
            try {
                var state0 = {a: arg0, b: arg1};
                var cb0 = (arg0, arg1) => {
                    const a = state0.a;
                    state0.a = 0;
                    try {
                        return wasm_bindgen_1ce2fb7d5365e802___convert__closures_____invoke___js_sys_aa66482ae00626ed___Function_fn_wasm_bindgen_1ce2fb7d5365e802___JsValue_____wasm_bindgen_1ce2fb7d5365e802___sys__Undefined___js_sys_aa66482ae00626ed___Function_fn_wasm_bindgen_1ce2fb7d5365e802___JsValue_____wasm_bindgen_1ce2fb7d5365e802___sys__Undefined_______true_(a, state0.b, arg0, arg1);
                    } finally {
                        state0.a = a;
                    }
                };
                const ret = new Promise(cb0);
                return ret;
            } finally {
                state0.a = 0;
            }
        },
        __wbg_of_027eb15371aac932: function(arg0) {
            const ret = Array.of(arg0);
            return ret;
        },
        __wbg_ok_670a05555db5f713: function(arg0) {
            const ret = arg0.ok;
            return ret;
        },
        __wbg_platform_52fc79c201f26d9a: function() { return handleError(function (arg0, arg1) {
            const ret = arg1.platform;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_prototypesetcall_13162965d1fe7aa3: function(arg0, arg1, arg2) {
            Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
        },
        __wbg_push_c9f4893fc209f768: function(arg0, arg1) {
            const ret = arg0.push(arg1);
            return ret;
        },
        __wbg_queueMicrotask_1e8503a8a690f0a3: function(arg0) {
            const ret = arg0.queueMicrotask;
            return ret;
        },
        __wbg_queueMicrotask_4a1a4d8dd332373b: function(arg0) {
            queueMicrotask(arg0);
        },
        __wbg_resolve_dbf78ab4942478b0: function(arg0) {
            const ret = Promise.resolve(arg0);
            return ret;
        },
        __wbg_revokeObjectURL_52940372bc4245cf: function() { return handleError(function (arg0, arg1) {
            URL.revokeObjectURL(getStringFromWasm0(arg0, arg1));
        }, arguments); },
        __wbg_set_2793479888329cb6: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = Reflect.set(arg0, arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_set_crossOrigin_eaf70f07e764020a: function(arg0, arg1, arg2) {
            arg0.crossOrigin = arg1 === 0 ? undefined : getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_height_82758a6572da0b2d: function(arg0, arg1) {
            arg0.height = arg1 >>> 0;
        },
        __wbg_set_onload_5ddf9ad234b8c847: function(arg0, arg1) {
            arg0.onload = arg1;
        },
        __wbg_set_src_da602cd25f3603f8: function(arg0, arg1, arg2) {
            arg0.src = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_width_caea3a6c19ea162f: function(arg0, arg1) {
            arg0.width = arg1 >>> 0;
        },
        __wbg_src_7a0be3a7bf7bbf4b: function(arg0, arg1) {
            const ret = arg1.src;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
        },
        __wbg_stack_575c4e0918581b9c: function(arg0, arg1) {
            const ret = arg1.stack;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
        },
        __wbg_static_accessor_GLOBAL_THIS_003ee833af9699fc: function() {
            const ret = typeof globalThis === 'undefined' ? undefined : globalThis;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_GLOBAL_e4293fb22cbe77da: function() {
            const ret = typeof global === 'undefined' ? undefined : global;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_SELF_53bb20457401453d: function() {
            const ret = typeof self === 'undefined' ? undefined : self;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_WINDOW_b5e0810bfecb7feb: function() {
            const ret = typeof window === 'undefined' ? undefined : window;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_statusText_f5d9635edef1913e: function(arg0, arg1) {
            const ret = arg1.statusText;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
        },
        __wbg_status_cb85b6c8d1769fa1: function(arg0) {
            const ret = arg0.status;
            return ret;
        },
        __wbg_then_656f253a5dd7d8ea: function(arg0, arg1, arg2) {
            const ret = arg0.then(arg1, arg2);
            return ret;
        },
        __wbg_then_e3f7f2d365708be8: function(arg0, arg1) {
            const ret = arg0.then(arg1);
            return ret;
        },
        __wbg_userAgent_a20b4771d027eeaa: function() { return handleError(function (arg0, arg1) {
            const ret = arg1.userAgent;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
        }, arguments); },
        __wbindgen_generic_0000000000000001: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 3952, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_1ce2fb7d5365e802___convert__closures_____invoke___wasm_bindgen_1ce2fb7d5365e802___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_1ce2fb7d5365e802___JsError___true_);
            return ret;
        },
        __wbindgen_generic_0000000000000002: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [], shim_idx: 3650, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_1ce2fb7d5365e802___convert__closures_____invoke_______true_);
            return ret;
        },
        __wbindgen_generic_0000000000000003: function(arg0) {
            // Cast intrinsic for `F64 -> Externref`.
            const ret = arg0;
            return ret;
        },
        __wbindgen_generic_0000000000000004: function(arg0, arg1) {
            // Cast intrinsic for `Ref(String) -> Externref`.
            const ret = getStringFromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            table.set(0, undefined);
            table.set(1024, undefined);
            table.set(1025, null);
            table.set(1026, true);
            table.set(1027, false);
        },
    };
    return {
        __proto__: null,
        "./slint_wasm_interpreter_bg.js": import0,
    };
}

function wasm_bindgen_1ce2fb7d5365e802___convert__closures_____invoke_______true_(arg0, arg1) {
    wasm.wasm_bindgen_1ce2fb7d5365e802___convert__closures_____invoke_______true_(arg0, arg1);
}

function wasm_bindgen_1ce2fb7d5365e802___convert__closures_____invoke___wasm_bindgen_1ce2fb7d5365e802___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_1ce2fb7d5365e802___JsError___true_(arg0, arg1, arg2) {
    const ret = wasm.wasm_bindgen_1ce2fb7d5365e802___convert__closures_____invoke___wasm_bindgen_1ce2fb7d5365e802___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_1ce2fb7d5365e802___JsError___true_(arg0, arg1, arg2);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

function wasm_bindgen_1ce2fb7d5365e802___convert__closures_____invoke___js_sys_aa66482ae00626ed___Function_fn_wasm_bindgen_1ce2fb7d5365e802___JsValue_____wasm_bindgen_1ce2fb7d5365e802___sys__Undefined___js_sys_aa66482ae00626ed___Function_fn_wasm_bindgen_1ce2fb7d5365e802___JsValue_____wasm_bindgen_1ce2fb7d5365e802___sys__Undefined_______true_(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen_1ce2fb7d5365e802___convert__closures_____invoke___js_sys_aa66482ae00626ed___Function_fn_wasm_bindgen_1ce2fb7d5365e802___JsValue_____wasm_bindgen_1ce2fb7d5365e802___sys__Undefined___js_sys_aa66482ae00626ed___Function_fn_wasm_bindgen_1ce2fb7d5365e802___JsValue_____wasm_bindgen_1ce2fb7d5365e802___sys__Undefined_______true_(arg0, arg1, arg2, arg3);
}

const CompilationResultFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_compilationresult_free(ptr, 1));
const RenderedFrameFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_renderedframe_free(ptr, 1));
const WrappedCompiledCompFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_wrappedcompiledcomp_free(ptr, 1));

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => wasm.__wbindgen_destroy_closure(state.a, state.b));

function debugString(val) {
    switch (typeof val) {
        // primitive types
        case 'number':
        case 'boolean':
        case 'undefined':
        return `${val}`;
        case 'string':
        return JSON.stringify(val);
        case 'bigint':
        return `${val}n`;
        case 'symbol':
        return val.description !== undefined
            ? `Symbol(${val.description})`
            : 'Symbol';
        case 'function':
        return typeof val.name === 'string' && val.name !== ''
            ? `Function(${val.name})`
            : 'Function';
        case 'object': {
            if (val === null) {
                return 'null';
            }
            // objects
            if (Array.isArray(val)) {
                return '[' + Array.from(val, debugString).join(', ') + ']';
            }
            // errors
            if (val instanceof Error) {
                return `${val.name}: ${val.message}\n${val.stack}`;
            }

            const toStringOutput = toString.call(val);
            // Test for built-in
            const className = /\[object ([^\]]+)\]/.exec(toStringOutput)?.[1];

            // Failed to match the standard '[object ClassName]'
            if (className === undefined) {
                return toStringOutput;
            }
            if (className === 'Object') {
                // we're a user defined class or Object
                // JSON.stringify avoids problems with cycles, and is generally much
                // easier than looping through ownProperties of `val`.
                try {
                    return 'Object(' + JSON.stringify(val) + ')';
                } catch (_) {
                    return 'Object';
                }
            }
            // TODO we could test for more things here, like `Set`s and `Map`s.
            return className;
        }
        // Per MDN: 'This list of values is exhaustive.'
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#description
    }
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function makeMutClosure(arg0, arg1, f) {
    const state = { a: arg0, b: arg1, cnt: 1 };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            wasm.__wbindgen_destroy_closure(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8ArrayMemory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true });
cachedTextDecoder.decode();
function decodeText(bytes) {
    return cachedTextDecoder.decode(bytes);
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

const wasmPath = `${__dirname}/slint_wasm_interpreter_bg.wasm`;
const wasmBytes = require('fs').readFileSync(wasmPath);
const wasmModule = new WebAssembly.Module(wasmBytes);
let wasmInstance = new WebAssembly.Instance(wasmModule, __wbg_get_imports());
let wasm = wasmInstance.exports;
wasm.__wbindgen_start();
