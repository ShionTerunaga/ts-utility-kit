import { createNone, createSome, isNone, isSome, optionConversion } from "../../src/option";
import { describe, expect, it } from "vitest";

describe("option", () => {
    it("createSome で作った値は Some型になる", () => {
        const some = createSome("value");

        expect.assert(some.kind === "some");
        expect(some.value).toBe("value");
    });

    it("createNone で作った値は None", () => {
        const none = createNone<never>();

        expect(none.kind).toBe("none");
    });

    it("isSome は some でない場合 false を返す", () => {
        const none = createNone<never>();
        expect(isSome(none)).toBe(false);
    });

    it("isNone は none でない場合 false を返す", () => {
        const none = createNone<never>();
        expect(isNone(none)).toBe(true);
    });

    it("isSomeでsomeの場合はtrueが返ってくる", () => {
        const some = createSome("value");

        expect(isSome(some)).toBe(true);
    });

    it("isSomeでnoneの場合にはfalseが返ってくる", () => {
        const some = createSome("value");

        expect(isNone(some)).toBe(false);
    });

    it("string型を与えたらSome型が返ってくる", () => {
        const result = optionConversion("string");
        expect.assert(isSome(result));

        expect(result.value).toBe("string");
    });

    it("nullを渡したらNone型が返ってくる", () => {
        const result = optionConversion(null);

        expect(isNone(result)).toBe(true);
    });

    it("undefinedを渡したらNone型が返ってくる", () => {
        const result = optionConversion(undefined);

        expect(isNone(result)).toBe(true);
    });
});
