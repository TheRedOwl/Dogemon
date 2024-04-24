import { text,expect } from "@jest/globals";
import { verifyPassword } from "./main.js";

describe("verifyPassword()",()=>{
    test("A megadott jelszó helyesen 6 karakter hosszú",()=>{
        let pw = "asd123"
        expect(verifyPassword(pw)).toBe(true)
    })
    test("A megadott jelszó helyesen 6-nál több karakter hosszú",()=>{
        let pw = "asdf1234"
        expect(verifyPassword(pw)).toBe(true)
    })
    test("A megadott jelszó hibásan 6-nál kevesebb karakter hosszú",()=>{
        let pw = "asd1"
        expect(verifyPassword(pw)).toBe(false)
    })
})