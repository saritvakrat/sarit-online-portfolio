import styled from 'styled-components';
import { white } from '@carbon/colors';

export const SectionTitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Paragraph = styled.p`
  white-space: pre-wrap;
`;

export const Pill = styled.span`
  display: inline-block;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem 1rem;
  background-color: ${white[0]};
  color: ${white[70]};
  border: 3px solid ${white[70]};
  border-radius: 2px;
  font-weight: bold;
`;