import PropType from 'prop-types';
import { ContactoClass } from './Contacto.class';

const ComponenteB = ({ contacto, estado }) => {
	return (
		<div>
			<h1>{contacto.nombre} {contacto.apellido}</h1>
			<h3>Email: {contacto.email}</h3>
			<h4>Conectado: {contacto.conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</h4>
      <button onClick={estado}>Cambiar estado de Conexión</button>
		</div>
	);
};
ComponenteB.propType = {
	contacto: PropType.instanceOf(ContactoClass),
  estado: PropType.func,
};

export default ComponenteB;