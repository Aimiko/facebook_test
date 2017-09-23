function Auth(authService){
    this.authService = authService

    this.signInWithFAcebook = (phone,password) => {
     return this.authService(phone,password)
    }

}
test('Mock with 1 should return 1',()=>{
    const mockFn = jest.fn(1)
        .mockReturnValue(1)

        expect(mockFn(1)).toBe(1)
        expect(mockFn).toBeCalledWith(1)
})
test('Singin with valid credential should pass',()=>{
    const returnObject = {
        name: 'Chat-usa',
        facebookId: '2564233',
        email: 'da@gmail.com'
    }
    const mockFacebook = jest.fn('087562451','abc12345')
        .mockReturnValue(returnObject)

        let app = new Auth(mockFacebook)
        let value = app.signInWithFAcebook('087562451','abc12345')

        expect(value).toEqual(returnObject)
        expect(mockFacebook).toBeCalled()
        expect(mockFacebook).toBeCalledWith('087562451','abc12345')
})