import React from 'react';

import { ContactForm, ContactsList, Filter } from 'components';
import {
  ContainerStyled,
  ErrorStyled,
  SectionStyled,
  TitleStyled,
} from './AppStyled';
import { selectError, selectIsLoading } from 'store/slice';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <SectionStyled>
      <ContainerStyled>
        <TitleStyled>Phonebook</TitleStyled>
        <ContactForm />
        <TitleStyled>Contacts</TitleStyled>
        <Filter />
        {isLoading && <Loader />}
        {error && <ErrorStyled>{error}</ErrorStyled>}
        <ContactsList />
      </ContainerStyled>
    </SectionStyled>
  );
};
