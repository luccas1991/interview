// Dada la respuesta de esta API, crear una tabla con el siguiente formato
// |-logo-|-símbolo-|-nombre-|-precio-|
// |₿     | BTC     |bitcoin |46,265  |
// |₿     | ETH     |ethereum |4000 |
// |------|---------|---------|------|

// Podes seguir el siguiente orden
// - llamado a la api
// - guardado de data
// - dibujado de tabla
// - paginación
// - refactor opcional
// - testing
// - estilos

// LINK API:
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
// LINK SWAGGER:
// https://www.coingecko.com/es/api/documentation

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
