export const isValiatePassword = (stringPassword) => stringPassword.length >= 1

export const isValidationPhone = (number) => {
    return (/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number));
}