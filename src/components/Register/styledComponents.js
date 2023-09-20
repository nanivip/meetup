import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RegisterImage = styled.img`
  height: 35%;
  width: 400px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const RegisterHeading = styled.h1`
  color: #334155;
  font-size: 32px;
  font-family: 'Roboto';
`

export const RegisterLabel = styled.label`
  color: #7b8794;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-bottom: 5px;
`

export const Input = styled.input`
  border: 1px solid #cbd5e1;
  width: 350px;
  padding: 15px;
  color: #000000;
  font-family: 'Roboto';
  outline: none;
  margin-bottom: 8px;
`

export const Select = styled.select`
  border: 1px solid #cbd5e1;
  width: 350px;
  padding: 15px;
  color: #000000;
  font-family: 'Roboto';
  outline: none;
  margin-bottom: 8px;
`

export const RegisterButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  border: none;
  outline: none;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 6px;
  margin-top: 20px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 16px;
  font-family: 'Roboto';
`
