const Either = require('ramda-fantasy').Either
const Maybe = require('ramda-fantasy').Maybe
const { Nothing, Just } = Maybe;

export const truthyEither =  (c: any) => c ? Either.Right() : Either.Left()

export const divide = (numerator: number, denominator: number) => {
    if (denominator === 0) {
        return new Nothing();
    }

    return new Just(numerator / denominator);
}

export const toNumber = (a: string) => {
    if (Number(a) === Number(a)) {
        return new Just(Number(a))
    }

    return new Nothing()
}
