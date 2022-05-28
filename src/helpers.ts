const Either = require('ramda-fantasy').Either
const Maybe = require('ramda-fantasy').Maybe
const { Nothing, Just } = Maybe;

export const truthyEither =  (c: any) => c ? Either.Right() : Either.Left()

export const divide = (numerator: any, denominator: any) => {
    if (Maybe.isNothing(numerator) || Maybe.isNothing(denominator) || denominator.getOrElse(0) === 0) {
        return new Nothing();
    }

    return new Just(numerator.getOrElse(0) / denominator.getOrElse(0));
}

export const toNumber = (a: string) => {
    if (Number(a) === Number(a)) {
        return new Just(Number(a))
    }

    return new Nothing()
}
