import { describe, expect, it, vi } from "vitest";

const { activateProvider } = vi.hoisted(() => ({ activateProvider: vi.fn() }));
vi.mock("@soksak/soksak-kit-plugin-terminal", () => ({ activateProviderTerminalPlugin: activateProvider }));

import { activate } from "./index";

describe("VT100 terminal plugin wiring", () => {
  it("selects the VT100 provider", () => {
    const app = {} as Parameters<typeof activate>[0]["app"];
    activate({ app, subscriptions: [] });
    expect(activateProvider).toHaveBeenCalledWith(app, [], {
      pluginId: "soksak-plugin-terminal-vt100", engineId: "vt100",
      ptySidecarId: "soksak-sidecar-pty", terminalSidecarId: "soksak-sidecar-terminal-vt100", programId: "terminal-vt100",
    });
  });
});
