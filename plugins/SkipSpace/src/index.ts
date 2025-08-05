import { LunaUnload, Tracer } from "@luna/core";
import { MediaItem, redux } from "@luna/lib";

export const { trace, errSignal } = Tracer("[SkipSpace]");

// You typically will never manually set errSignal. Its handled when trace.err or similar is called
errSignal!._ = "SkipSpace Error signal >:";

// Example plugin settings
export { Settings } from "./Settings";

// Functions in unloads are called when plugin is unloaded.
// Used to clean up resources, even listener dispose etc should be added here
export const unloads = new Set<LunaUnload>();

