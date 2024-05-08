


export const sanitize = (data) => {

    const { hashedPassword, ...sanitizedData } = data;

    return sanitizedData;
}