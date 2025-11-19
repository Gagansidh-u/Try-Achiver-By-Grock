import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-invert max-w-none text-muted-foreground prose-headings:text-foreground prose-headings:font-headline prose-a:text-primary hover:prose-a:text-primary/80">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <p>
              Welcome to Try Achiever. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect via the Application includes:
            </p>
            <ul>
              <li><strong>Personal Data:</strong> We do not collect personally identifiable information, such as your name, shipping address, email address, etc.</li>
              <li><strong>Usage Data:</strong> We may collect information about your device and how you use the app to help us improve our service. This data is anonymized.</li>
            </ul>

            <h2>2. Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Application to:
            </p>
            <ul>
              <li>Monitor and analyze usage and trends to improve your experience with the Application.</li>
              <li>Perform other business activities as needed.</li>
            </ul>

            <h2>3. Disclosure of Your Information</h2>
            <p>
              We do not share your information with any third parties.
            </p>

            <h2>4. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at: privacy@tryachiever.example.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
