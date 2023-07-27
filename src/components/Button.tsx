import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  title: string;
};

export const Button = forwardRef<TouchableOpacity, Props>(
  ({ title, ...rest }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        {...rest}
        style={{ padding: 20, backgroundColor: '#f00', borderRadius: 10 }}
      >
        <Text style={{ color: '#fff' }}>{title}</Text>
      </TouchableOpacity>
    );
  }
);
