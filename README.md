# Typesense UI

A fully interactive, modern web application for managing and exploring Typesense data. Built with React, TypeScript, Vite, and Tailwind CSS.

![Typesense UI](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Features

### 🔌 Connection Management

- **Setup Screen**: Enter your Typesense server details (API Key, Host, Port, Protocol, Timeout)
- **Connection Status**: Real-time connection status indicator
- **Secure Storage**: Connection details saved securely in browser localStorage
- **Easy Disconnect**: Quick disconnect with single click

### 📊 Collections Management

- **Collections List**: View all available collections with document counts
- **Search Collections**: Quick search/filter through collections
- **Quick Actions**: View, Schema inspection, and Delete operations
- **Visual Feedback**: Selected collection highlighting and status indicators

### 🔍 Advanced Document Viewer

- **Paginated Table**: Clean, responsive table view with customizable page sizes
- **Live Search**: Instant results as you type with full-text search
- **Dynamic Filters**: Auto-generated filters based on collection schema
  - Text filters for string fields
  - Range filters for numeric fields
  - Boolean toggles for boolean fields
- **Real-time Updates**: Filters and search apply instantly
- **Column Management**: Show/hide columns with column picker
- **Sorting**: Click column headers to sort ascending/descending
- **JSON View**: View full document JSON in modal
- **Responsive Design**: Works on all screen sizes

### 🎨 User Experience

- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Modern UI**: Clean, professional design inspired by Supabase and Vercel
- **Error Handling**: Clear error messages for all failure scenarios
- **Loading States**: Smooth loading indicators throughout
- **Responsive Layout**: Mobile-friendly design

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm
- Access to a Typesense server

### Installation

1. **Clone or download this repository**

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

### 1. Connect to Typesense

When you first open the app, you'll see a connection setup screen. Enter your Typesense server details:

- **API Key**: Your Typesense API key (admin or search-only)
- **Host**: Your Typesense host (e.g., `localhost` or `typesense.example.com`)
- **Port**: Port number (default: `8108`)
- **Protocol**: `http` or `https`
- **Connection Timeout**: Timeout in seconds (default: `5`)

Click "Connect to Typesense" to establish the connection.

### 2. Browse Collections

Once connected, you'll see:

- **Left Sidebar**: List of all your collections with document counts
- **Search Bar**: Filter collections by name
- **Collection Cards**: Click to select and view documents

### 3. View Documents

After selecting a collection:

- **Search Bar**: Search across all text fields in the collection
- **Filters**: Use auto-generated filters based on your schema
  - String fields: Text input for exact matches
  - Numeric fields: Min/Max range inputs
  - Boolean fields: True/False/All dropdown
- **Table View**: See your documents in a clean table
  - Click column headers to sort
  - Click eye icon to view full JSON
  - Use column picker to show/hide columns
- **Pagination**: Navigate through large datasets

### 4. Advanced Features

- **Column Picker**: Click "Columns" button to select which fields to display
- **Sorting**: Click any column header to sort (click again to reverse)
- **JSON View**: Click the eye icon on any row to see the full document
- **Theme Toggle**: Switch between light and dark mode
- **Refresh**: Click refresh icon to reload collections

## Project Structure

```
typesense-ui/
├── src/
│   ├── components/
│   │   ├── ConnectionSetup.tsx    # Initial setup form
│   │   ├── Header.tsx              # App header with controls
│   │   ├── CollectionsList.tsx     # Collections sidebar
│   │   └── CollectionViewer.tsx    # Main document viewer
│   ├── context/
│   │   └── AppContext.tsx          # Global state management
│   ├── services/
│   │   └── typesense.ts            # Typesense API client
│   ├── types/
│   │   └── index.ts                # TypeScript type definitions
│   ├── lib/
│   │   └── utils.ts                # Utility functions
│   ├── App.tsx                     # Main app component
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Global styles
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe code
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first styling
- **Typesense JS Client**: Official Typesense client
- **Lucide React**: Beautiful icon set
- **LocalStorage**: Persistent connection settings

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Customization

**Colors**: Edit `tailwind.config.js` to change the color scheme
**Port**: Change port in `vite.config.ts`
**Default Settings**: Modify initial values in `ConnectionSetup.tsx`

## Error Handling

The app handles various error scenarios:

- ❌ Invalid connection details
- ❌ Collection not found
- ❌ Invalid queries
- ❌ Network errors
- ❌ Authentication failures

All errors are displayed with clear, user-friendly messages.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

MIT License - feel free to use this in your projects!

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## Acknowledgments

- Design inspired by [Typesense Dashboard](https://github.com/typesense/typesense-dashboard), [Supabase](https://supabase.com), and [Vercel](https://vercel.com)
- Icons by [Lucide](https://lucide.dev/)
- Built with ❤️ using [Typesense](https://typesense.org)
