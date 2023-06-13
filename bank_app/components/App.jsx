import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AccountCheck from './components/AccountCheck';

const App = () => {
    const balance = -50.0; // Beispielwert für den Kontostand
    const transactions = [
        { where: 'Tankstelle', value: -25.0 },
        { where: 'Gehalt', value: 1000.0 },
    ]; // Beispiel-Transaktionen

    return (
        <div>
            <Header />
            <AccountCheck balance={balance} transactions={transactions} />
            <Footer />
        </div>
    );
};

export default App;