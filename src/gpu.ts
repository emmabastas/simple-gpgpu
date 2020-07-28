export interface Gpu {
  _gl: WebGLRenderingContext
}

export function newGpu(gl: WebGLRenderingContext): Gpu {
  return { _gl: gl }
}