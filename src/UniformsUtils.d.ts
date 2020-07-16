export function cloneUniforms( uniforms_src: any ): any;
export function mergeUniforms( uniforms: any[] ): any;
export function cloneUniformsGroups( uniforms_src: any ): any;

export namespace UniformsUtils {
	export {
		mergeUniforms as merge,
		cloneUniforms as clone,
	};
}
